import 'styled-components';
import {palette, typographyInterface} from 'themes/interface';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: palette;
    typo: typographyInterface;
  }
}
