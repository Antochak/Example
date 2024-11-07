import {Stack} from '@mui/material';
import {AnotherBlock, ContentBlock, IntroductionBlock} from '~/features';
import {Layout} from '~/shared';

HomePage.Layout = Layout;

export default function HomePage() {
  return (
    <main>
      <Stack gap={{xs: 1, md: 5}} maxWidth={'xl'} m='auto'>
        <IntroductionBlock />
        <ContentBlock />
        <AnotherBlock />
      </Stack>
    </main>
  );
}
