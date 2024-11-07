import {CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider as MUIThemeProvider, ThemeOptions} from '@mui/material/styles';
import React from 'react';

import GlobalStyles from '../GlobalStyles';
import componentsOverride from '../theme';

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({children}: Props) {
  const themeOptions: ThemeOptions = React.useMemo(
    () => ({
      // here you can set palette, typography, custom shadows and so on...
    }),
    [],
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
