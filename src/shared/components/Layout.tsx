import {Stack} from '@mui/material';
import {Footer, Header} from '~/widgets';

export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Stack minHeight={1}>
      <Header />
      <Stack flex={'1 0 auto'}>{children}</Stack>
      <Footer />
    </Stack>
  );
};
