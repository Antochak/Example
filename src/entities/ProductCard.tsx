import {Stack, Typography} from '@mui/material';

type Props = {
  title: string;
  description: string;
};
export const ProductCard = ({description, title}: Props) => {
  return (
    <Stack maxWidth={{xs: 1, sm: 262}}>
      <Typography variant='h5' component='h4' fontWeight={600}>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Stack>
  );
};
