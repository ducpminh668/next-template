import Input, { InputProps } from '@mui/material/Input';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

interface TextInputProps extends InputProps {
  name: string;
  control?: any;
}

export const TextInput = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<TextInputProps>
>((props, ref) => {
  const classes = useStyles();
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Input {...field} {...props} inputRef={ref} className={classes.root} />
      )}
    />
  );
});
