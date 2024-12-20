import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  model,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LayoutService } from '../../../layout.service';
import { OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule, DatePipe } from '@angular/common';
import { AgoPipe } from '../../../shared/pipes/ago.pipe';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogData, TextDialogComponent } from './text-dialog.component';
import { protocolDefinition as textDefinition } from '../../../../protocols/text';
import { IdentityService } from '../../../identity.service';
import { AppService } from '../../../app.service';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { OverlayModule } from '@angular/cdk/overlay';

import {
  CdkMenuItemRadio,
  CdkMenuItemCheckbox,
  CdkMenuGroup,
  CdkMenu,
  CdkMenuTrigger,
  CdkMenuItem,
  CdkMenuBar,
  CdkMenuModule,
} from '@angular/cdk/menu';
import { TextEditorComponent } from '../../../shared/components/text-editor/text-editor.component';
import { StripHtmlPipe } from '../../../shared/pipes/stripHtml';
import { DwnDateSort } from '@web5/agent';

export interface Section {
  id: string;
  name: string;
  updated: Date;
  message: string;
  avatar: string;
}

@Component({
  selector: 'app-text',
  standalone: true,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    DatePipe,
    AgoPipe,
    MatButtonToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    OverlayModule,
    CdkMenuModule,
    CdkMenuBar,
    CdkMenuItem,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuGroup,
    CdkMenuItemCheckbox,
    CdkMenuItemRadio,
    TextEditorComponent,
    StripHtmlPipe,
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent implements OnDestroy {
  async closeLabelsMenu(entry: any) {
    entry.open = false;
    console.log('Menu closed:', entry);
    await this.saveText(entry, entry.data);
  }

  viewStyle = model<string>('card');

  // selectedTags: string[] = [];
  selectedTag: string = '';

  bold = false;

  bold2 = false;

  dialog = inject(MatDialog);

  public layout = inject(LayoutService);

  identity = inject(IdentityService);

  app = inject(AppService);

  toppings = new FormControl('');

  labels = signal<string[]>(['Travel', 'Inspiration', 'Lifestyle', 'Food', 'Photography']);

  labelMap: { [key: string]: string } = {
    Travel: 'label1',
    Inspiration: 'label2',
    Lifestyle: 'label3',
    Food: 'label4',
    Photography: 'label5',
  };

  records = signal<any[]>([]);

  checkedColumns: any = [];

  columnsCopy: any = [{ key: 1, title: 'test' }];

  constructor() {
    this.layout.marginOn();

    // this.layout.disableScrolling();
    this.layout.disableNavigation();

    this.layout.resetActions();

    effect(async () => {
      if (this.app.initialized()) {
        await this.loadNotes();
      }
    });
  }

  async deleteText(entry: any) {
    const { status } = await entry.record.delete();

    if (status) {
      this.records.update((records) => records.filter((r) => r.record != entry.record));
    }
  }

  newNote() {
    this.editText({
      data: {
        title: '',
        body: '',
        background: '',
        collaborators: [],
        labels: [],
        published: true,
      },
    });
  }

  async loadNotes(tags?: any) {
    console.log('VALUE OF TAGS:', tags);

    var { records } = await this.identity.web5.dwn.records.query({
      message: {
        filter: {
          tags: tags,
          protocol: textDefinition.protocol,
          schema: textDefinition.types.entry.schema,
          dataFormat: textDefinition.types.entry.dataFormats[0],
        },
        dateSort: DwnDateSort.CreatedDescending,
      },
    });

    //     let json = {};
    // let recordEntry = null;

    this.records.set([]);

    if (records) {
      // Loop through returned records and print text from each
      for (const record of records) {
        let data = await record.data.json();
        let json: any = { record: record, data: data };

        // if (record.author == this.identity.did) {
        //   json.direction = 'out';
        // }

        this.records.update((records) => [...records, json]);
      }
    }

    console.log('All requests:', this.records());
  }

  onSelectionChange(event: any) {
    console.log('Selection changed:', event);
    console.log(this.selectedTag);

    // const formattedTags = this.selectedTags.map((tag) => {
    //   return { [this.labelMap[tag]]: tag };
    // });

    // const formattedTags: { [key: string]: string } = this.selectedTags.reduce((acc: { [key: string]: string }, tag) => {
    //   acc[this.labelMap[tag]] = tag;
    //   return acc;
    // }, {});

    // console.log(formattedTags);

    // if (!this.selectedTags || this.selectedTags.length == 0) {
    if (!this.selectedTag) {
      this.loadNotes();
    } else {
      // const tagsString = this.selectedTags.join(',');
      const tagsString = this.selectedTag;
      this.loadNotes({ labels: tagsString });
    }
  }

  ngOnDestroy() {
    this.layout.enableScrolling();
  }

  copyText(entry: any) {
    const clonedData = JSON.parse(JSON.stringify(entry.data));

    this.saveText(
      {
        data: clonedData,
      },
      clonedData,
    );
  }

  editText(entry: any) {
    let data: DialogData = {
      title: entry.data.title,
      body: entry.data.body,
      abstract: entry.data.abstract,
      background: entry.data.background,
      collaborators: [],
      labels: entry.data.labels ?? [''],
      published: entry.record ? entry.record.published : entry.data.published,
      image: entry.data.image,
    };

    const original = JSON.parse(JSON.stringify(data));

    const dialogRef = this.dialog.open(TextDialogComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
      data,
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (!result) {
        // Reset the original data if user cancels.
        data = original;
      } else {
        console.log('data result for saving:', data);

        // Update the data from old to new.
        entry.data = data;

        await this.saveText(entry, data);

        // Update the data so it's displayed in the UI without re-query DWN.
        // TODO: Validate if this is actually needed since we copy above now.
        // this.records().find((r) => r.record == entry.record).data = data;
      }
    });

    return dialogRef.afterClosed();
  }

  ngOnInit() {}

  selectColor() {}

  // async onColorChange(event: Event, entry: any) {
  //   // Get the new input value
  //   const newValue = (event.target as HTMLInputElement).value;
  //   // Perform actions based on the new value
  //   console.log('Input value changed:', newValue);

  //   entry.data.background = newValue;

  //   const { status, record } = await entry.record.update({
  //     data: entry.data,
  //   });

  //   console.log('Record created:', record);
  //   console.log('Record status:', status);
  // }

  async saveText(entry: any, data: DialogData) {
    const published = data.published;

    // delete data.published;

    // We must ensure we always initially save with tags, because we cannot edit
    // a record that did not have any initial tags.
    // let tags = {
    //   labels: [''],
    // };

    let tags = undefined;

    // Only set labels on tags if there is any data. It will crash to attempt to save label with empty array.
    if (data.labels && data.labels.length > 0) {
      tags = {
        labels: data.labels,
      };
    }

    if (entry.record) {
      // entry.record.tags.labels = tags.labels;
      // const tags = { entry.record.tags }

      const { status } = await entry.record.update({
        tags: tags,
        data: data,
        published: published,
      });

      // record.update({ tags :{ tag: value }}) should do it.

      console.log('Record status:', status);
      await entry.record.send();
    } else {
      const query: any = {
        data: data,
        message: {
          tags,
          published: published,
          protocol: textDefinition.protocol,
          protocolPath: 'entry',
          schema: textDefinition.types.entry.schema,
          dataFormat: textDefinition.types.entry.dataFormats[0],
        },
      };

      console.log('QUERY:', query);

      const { record, status } = await this.identity.web5.dwn.records.create(query);

      console.log('Record created:', record);
      console.log('Record status:', status);

      if (record) {
        entry.record = record;
        this.records.update((records) => [entry, ...records]);
        await entry.record.send();
      }
    }
  }
}
