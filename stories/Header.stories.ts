

import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    textColor: { control: 'color' },
    buttonColor: { control: 'color' },
    buttonHoverColor: { control: 'color' },
    imageSrc: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Customized: Story = {
  args: {
    textColor: 'text-orange-600',
    buttonColor: 'bg-white',
    buttonHoverColor: 'hover:bg-orange-100',
    imageSrc: '/0_2.png',
  },
};

export const Default: Story = {};
