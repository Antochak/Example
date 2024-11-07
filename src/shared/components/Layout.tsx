import {Stack} from '@mui/material';
import {Footer, Header} from '~/widgets';
import {ScrollStack} from '../ui';

export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <ScrollStack minHeight={1} position='relative' id='container'>
      <Header />
      <Stack flex={'1 0 auto'}>{children}</Stack>
      <Footer />
    </ScrollStack>
  );
};
