import {Stack, Typography} from '@mui/material';
import Link from 'next/link';
import {ROUTES} from '~/shared/constants';
import {CadExchangeIcon} from '../../public/icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Stack position='sticky' bottom={0} left={0} width={1}>
      <footer>
        <Stack
          p={{xs: 2, md: 3}}
          justifyContent='center'
          alignItems='center'
          direction='row'
          gap={2}
          bgcolor={'white'}
        >
          <Stack component={Link} href={ROUTES.HOME}>
            <CadExchangeIcon />
          </Stack>
          <Typography variant='body2'>{currentYear}</Typography>
        </Stack>
      </footer>
    </Stack>
  );
};
