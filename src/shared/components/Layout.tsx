import {Stack} from '@mui/material';
import {Footer, Header} from '~/widgets';

export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Stack height={1}>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};
