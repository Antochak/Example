import {Stack, StackProps} from '@mui/material';
import {grey} from '@mui/material/colors';
import type {ReactNode} from 'react';

interface ScrollStackProps extends StackProps {
  children: ReactNode;
}

export const ScrollStack = ({sx, children, ...rest}: ScrollStackProps) => {
  return (
    <Stack
      {...rest}
      sx={{
        '&::-webkit-scrollbar': {
          height: 1,
          width: 8,
          '@media (max-width: 900px)': {
            display: 'none',
          },
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: 1,
          background: grey[400],
          '@media (max-width: 900px)': {
            display: 'none',
          },
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 1,
          background: grey[400],
          '@media (max-width: 900px)': {
            display: 'none',
          },
        },
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};
