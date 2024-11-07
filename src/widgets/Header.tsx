import {Stack} from '@mui/material';
import Link from 'next/link';
import {ROUTES} from '~/shared/constants';
import {ContactButton} from '~/shared/ui';
import {CadExchangeIcon} from '../../public/icons';

export const Header = () => {
  return (
    <Stack position='sticky' top={0} left={0} width={1}>
      <header>
        <Stack
          p={{xs: 2, md: 3}}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          bgcolor={'white'}
        >
          <nav>
            <Stack component={Link} href={ROUTES.HOME}>
              <CadExchangeIcon />
            </Stack>
          </nav>
          <ContactButton />
        </Stack>
      </header>
    </Stack>
  );
};
