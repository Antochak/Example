import {Stack, Typography} from '@mui/material';
import Link from 'next/link';
import {ROUTES} from '~/shared/constants';
import {CadExchangeIcon} from '../../public/icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Stack p={{xs: 2, md: 3}} justifyContent='center' alignItems='center' direction='row' gap={2}>
        <Stack component={Link} href={ROUTES.HOME}>
          <CadExchangeIcon />
        </Stack>
        <Typography variant='body2'>{currentYear}</Typography>
      </Stack>
    </footer>
  );
};
