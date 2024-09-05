import { Component, effect, inject, Input, signal } from '@angular/core';
import { ConnectionEntry, ConnectionService, ConnectionType } from '../../connection.service';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AgoPipe } from '../../shared/pipes/ago.pipe';
import { ProfileHeaderComponent } from '../../shared/components/profile-header/profile-header.component';
import { RecordEntry } from '../../data';
import { IdentityService } from '../../identity.service';
import { FriendService } from '../../friend.service';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [ProfileHeaderComponent, AgoPipe, CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss',
})
export class RequestComponent {
  @Input() public entry?: ConnectionEntry = undefined;

  connection = inject(ConnectionService);

  friend = inject(FriendService);

  identity = inject(IdentityService);

  app = inject(AppService);

  constructor() {}

  deleteConnection(entry: any) {
    entry.loading = true;

    this.connection.deleteConnection(entry);

    // TODO: We should delete notifications related to this connection.
  }

  async accept(entry: ConnectionEntry) {
    entry.loading = true;
    console.log('Accepting connection request', entry);

    // Get the DID from author of the request. We store this as recipient in the connection.
    entry.data.did = entry.record.author;

    console.log('CONNECTION TAGS:', JSON.stringify(entry.record.tags));
    console.log('CONNECTION DATA:', JSON.stringify(entry.data));

    // Grab type from the request and copy to connection.
    const type = entry.record.tags['type'] as ConnectionType;

    if (type == ConnectionType.Friend) {
      // This will issue a two-way VC, persist it locally and send to remote party.
      const acceptEntry = await this.friend.accept(entry);
      entry.data.vc = acceptEntry?.data.vc;
      entry.data.recordId = acceptEntry?.id; // Store a link between Connection and stored Credential. This is needed when deleting an connection so we get rid of the Credential.
    }

    // Persist the connection locally. This is the foundation for permissions checks, friends lists and more.
    const connectionEntry = await this.connection.create(entry, type);
    console.log('Connection Entry that was made: ', connectionEntry);

    console.log('CONNECTION TAGS BEFORE DELETE:', JSON.stringify(entry.record.tags));
    await this.connection.deleteRequest(entry);
    console.log('CONNECTION TAGS AFTER DELETE:', JSON.stringify(entry.record.tags));
    console.log('CONNECTION TYPE:', type);

    // TODO: Implement a data service behind all mini apps, implement a generic interface that allows
    // individual mini-apps to receive data from the connection service.
    if (type == ConnectionType.Data) {
      console.log('ACCEPTING DATA CONNECTION:', entry);

      if (entry.data.app == 'tasks') {
        console.log('ACEPTING TASKS CONNECTION:', entry);

        // Read data from external DWN, we should be allowed.
        console.log('DID DWN to read from:', entry.data.did);
        console.log('RID DWN to read from:', entry.data.recordId);

        const { record, status } = await this.identity.web5.dwn.records.read({
          from: entry.data.did, // Get the data from the sender DWN.
          message: {
            protocolRole: 'collaborator',
            filter: {
              recordId: entry.data.recordId,
            },
          },
        });

        // const { records, status } = await web5.dwn.records.query({
        //   from: aliceDid,
        //   message: {
        //     protocolRole: 'friend',
        //     filter: {
        //       protocol: curatorPlaylistProtocolDefinition.protocol,
        //       protocolPath: 'playlist',
        //     },
        //   },
        // });

        console.log('STATUS FROM READING RECORD EXTERNALLY:', status);
        console.log('RECORD FROM CONNECTION ACCEPT:', record);

        let json: any = {};

        if (record) {
          let recordJson = await record.data.json();
          json = { ...recordJson, id: record.dataCid, did: record.author, created: record.dateCreated };
          console.log('RECORD JSON:', json);
        }
      }
    }

    // TODO: We should delete notifications related to this connection.
    // this.deleteNotification(entry);
  }

  async block(entry: any) {
    entry.loading = true;
    console.log('Blocking user', entry);

    const result = await this.connection.block(entry.record.author);
    console.log('Block result: ', result);

    // Delete all connections from this DID.
    // await this.connection.deleteConnections(entry.record.author);

    // // Delete all connection requests from this DID.
    // await this.connection.deleteRequests(entry.record.author);

    // TODO: We should delete notifications related to this connection.
    // await this.deleteNotification(entry);
  }

  reject(entry: any) {
    entry.loading = true;

    this.connection.deleteRequest(entry);

    // Next step is to delete the request at the sender / receiver.
  }
}