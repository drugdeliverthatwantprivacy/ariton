import '@mui/material/styles';
import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends MuiTheme {
    status: {
      danger: string;
    };
  }

  interface CustomThemeOptions extends MuiThemeOptions {
    status?: {
      danger?: string;
    };
  }

  export interface Theme extends CustomTheme {}
  export interface ThemeOptions extends CustomThemeOptions {}
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral?: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
} 