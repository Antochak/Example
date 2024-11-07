import {buttonClasses, ButtonProps} from '@mui/material/Button';
import {alpha, Theme} from '@mui/material/styles';

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

export default function Button(theme: Theme) {
  const rootStyles = (ownerState: ButtonProps) => {
    const containedVariant = ownerState.variant === 'contained';
    const outlinedVariant = ownerState.variant === 'outlined';
    const textVariant = ownerState.variant === 'text';
    const softVariant = ownerState.variant === 'soft';

    const defaultStyle = {
      borderRadius: 10,

      // CONTAINED
      ...(containedVariant && {
        '&:hover': {
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor',
        },
      }),
      // OUTLINED
      ...(outlinedVariant && {
        '&:hover': {
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor',
        },
      }),
      // TEXT
      ...(textVariant && {
        '&:hover': {
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor',
        },
      }),
      // SOFT
      ...(softVariant && {
        '&:hover': {
          borderColor: 'currentColor',
          boxShadow: '0 0 0 0.5px currentColor',
        },
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          color: '#ffffff',
          border: `1px solid #131313`,
          backgroundColor: '#171717',
          '&:hover': {
            boxShadow: `0px 8px 19px -4px ${alpha('#131313', 0.3)}`,
            backgroundColor: '#333333',
          },
        }),
        // OUTLINED
        ...(outlinedVariant && {
          color: theme.palette.text.primary,
          border: `1px solid #333333`,
          '&:hover': {
            boxShadow: `0px 8px 19px -4px ${alpha('#131313', 0.3)}`,
          },
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette.text.primary,
          border: `1px solid #131313`,
          backgroundColor: theme.palette.action.hover,
          '&:hover': {
            backgroundColor: theme.palette.action.focus,
          },
        }),
        // TEXT
        ...(textVariant && {
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            boxShadow: `0px 8px 19px -4px ${alpha('#131313', 0.3)}`,
          },
        }),
      }),
    }));

    const disabledState = {
      [`&.${buttonClasses.disabled}`]: {
        // SOFT
        ...(softVariant && {
          backgroundColor: '#676767',
        }),
      },
      [`&.${buttonClasses.disabled}`]: {
        // CONTAINED
        ...(containedVariant && {
          backgroundColor: '#676767',
        }),
      },
      [`&.${buttonClasses.disabled}`]: {
        // OUTLINED
        ...(outlinedVariant && {
          backgroundColor: '#676767',
        }),
      },
      [`&.${buttonClasses.disabled}`]: {
        // TEXT
        ...(textVariant && {
          backgroundColor: '#676767',
        }),
      },
    };

    return [defaultStyle, ...colorStyle, disabledState];
  };

  return {
    MuiButton: {
      styleOverrides: {
        root: ({ownerState}: {ownerState: ButtonProps}) => rootStyles(ownerState),
      },
    },
  };
}
