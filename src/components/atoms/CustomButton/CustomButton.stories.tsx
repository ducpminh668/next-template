import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomButton } from './CustomButton';

export default {
  title: 'CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

export const Primary: ComponentStory<typeof CustomButton> = () => (
  <CustomButton variant="outlined">Outlined</CustomButton>
);
export const Secondary: ComponentStory<typeof CustomButton> = () => (
  <>
    <CustomButton variant="outlined">Secondary</CustomButton>
  </>
);
