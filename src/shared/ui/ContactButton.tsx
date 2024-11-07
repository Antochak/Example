import {Button} from '@mui/material';
import Link from 'next/link';
import {ROUTES} from '../constants';

export const ContactButton = () => {
  return (
    <Button LinkComponent={Link} href={ROUTES.CONTACT} size='small' variant='contained'>
      Contact us
    </Button>
  );
};
