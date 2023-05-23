import type { Meta, StoryObj } from '@storybook/react';
import  Navigation from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Example/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logoSrc: { control: 'text' },
    menu: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

const mockMenu= {
  "_createdAt": "2023-05-14T01:12:24Z",
  "_id": "a2770c6a-8dab-4296-b979-225646e96612",
  "_rev": "1wlRcZyaI8QeaGcDelCn9i",
  "_type": "menu",
  "_updatedAt": "2023-05-14T04:29:50Z",
  "items": [
    {
      "_key": "9fbb1d358ecd",
      
      "link": "/",
      "title": "home"
    }
  ],
  "logo": {
    "_type": "image",
    "asset": {
      "_ref": "image-08cec9536a570e72357e21af4516aaa105070657-1024x1024-png",
      "_type": "reference"
    }
  },
  "slug": {
    "_type": "slug",
    "current": "home"
  },
  "title": "HOME"
};

export const Customized: Story = {
  args: {
    logoSrc: 'https://cdn.discordapp.com/attachments/1103865788944875622/1107025245912703066/logonobrgd.png',
    menu: mockMenu,
  },
};

export const Default: Story = {
  args: {
    logoSrc: 'https://cdn.discordapp.com/attachments/1103865788944875622/1107025245912703066/logonobrgd.png',
    menu: mockMenu,
  },
};
