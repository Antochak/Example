import {Divider, Stack, Typography} from '@mui/material';
import {ContactButton} from '~/shared/ui';
import {useResponsive} from '~/utils';

export const AnotherBlock = () => {
  const isMobile = useResponsive('down', 'md');

  return (
    <section id='another-block'>
      <Stack
        bgcolor={'#e5e5e5a3'}
        px={{xs: 2, sm: 3, md: 8}}
        py={3}
        alignItems='center'
        gap={{xs: 3, md: 5}}
      >
        <Typography component={'h3'} fontWeight={700} variant={isMobile ? 'h6' : 'h3'}>
          Less important title
        </Typography>
        <ContactButton />
      </Stack>
      <Divider orientation='horizontal' flexItem />
    </section>
  );
};
