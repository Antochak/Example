import {Divider, Stack, Typography} from '@mui/material';
import LazyLoad from 'react-lazyload';
import {Introduction_data} from '~/pages/api/data';
import {getYoutubeVideoId, useResponsive} from '~/utils';

const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

export const IntroductionBlock = () => {
  const videoId = getYoutubeVideoId(videoUrl);
  const isMobile = useResponsive('down', 'md');

  return (
    <section id='introduction'>
      <Divider orientation='horizontal' flexItem />
      <Stack
        px={{xs: 2, sm: 3, md: 8}}
        py={3}
        direction={{xs: 'column', md: 'row'}}
        justifyContent='space-between'
        bgcolor={'#e5e5e5a3'}
        gap={{xs: 3, md: 5}}
      >
        <Stack gap={{xs: 1, md: 3}} flex={1}>
          <Typography component={'h1'} fontWeight={700} variant={isMobile ? 'h5' : 'h3'}>
            {Introduction_data.title}
          </Typography>
          <Typography component='article' variant={isMobile ? 'body2' : 'body1'}>
            {Introduction_data.description}
          </Typography>
        </Stack>
        <Stack flex={1}>
          <LazyLoad height={235}>
            <iframe
              height={235}
              width={'100%'}
              src={`https://www.youtube.com/embed/${videoId}`}
              style={{border: 'none'}}
              title='YouTube video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </LazyLoad>
        </Stack>
      </Stack>
    </section>
  );
};
