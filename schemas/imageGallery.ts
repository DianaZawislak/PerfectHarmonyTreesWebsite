import {defineField, defineType} from 'sanity'




export const ImageGallery = {
  name: 'ImageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },

    {
        name: "ImageArray",
        title: "Image List",
        type: "array",
        of: [{ type: "image" }],
      },

  
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
     
    },
  },
};

  