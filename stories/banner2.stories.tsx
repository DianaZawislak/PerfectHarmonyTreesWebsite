import type { Meta, StoryObj } from '@storybook/react';
import { Banner2} from './banner2';

const meta: Meta<typeof Banner2> = {
  title: 'Banner2',
  component: Banner2,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {

  },
};

export default meta;

type Story = StoryObj<typeof Banner2>;



export const Default: Story = {};
