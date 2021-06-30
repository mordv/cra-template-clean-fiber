import { theme } from './theme';

type AppTheme = typeof theme;

declare module 'styled-components' {
  // that's currently the only way to make styled-components theme work properly with typescript
  // however it's nonsense for eslint, so we disable its rule here
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
