import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import { makeStyles } from '@mui/styles';

interface CustomButtonProps extends ButtonProps {}

const useStyles = makeStyles({
  root: {},
});

export const CustomButton = (props: CustomButtonProps) => {
  const classes = useStyles();
  return <Button {...props} className={classes.root} />;
};
