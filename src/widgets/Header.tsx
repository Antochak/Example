import {Stack} from '@mui/material';
import {CadExchangeIcon} from '../../public/icons';

export const Header = () => {
  return (
    <header>
      <Stack p={{xs: 2, md: 3}}>
        <CadExchangeIcon />
      </Stack>
    </header>
  );
};
