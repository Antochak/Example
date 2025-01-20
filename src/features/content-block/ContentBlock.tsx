import { Box, Stack, Typography } from '@mui/material';
import { ProductCard } from '~/entities';
import { Content_data } from '~/pages/api/data';
import { ContactButton } from '~/shared/ui';
import { useResponsive } from '~/utils';

export const ContentBlock = () => {
  const isMobile = useResponsive('down', 'md');

  return (
    <section>
      <Stack gap={{xs: 3, md: 5}} px={{xs: 2, sm: 3, md: 8}} alignItems='center' py={3}>
        <Typography component={'h2'} variant={isMobile ? 'h6' : 'h3'} fontWeight={600}>
          Also very important title
        </Typography>
        <Box
          gap={{xs: 2, md: 5}}
          width={1}
          pr={0.5}
          display='grid'
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {Content_data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
              />
            );
          })}
        </Box>
        <ContactButton />
      </Stack>
    </section>
  );
};
