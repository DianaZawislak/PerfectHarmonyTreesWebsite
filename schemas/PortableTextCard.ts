import {defineField, defineType} from 'sanity'




export const portableTextCard = {
  name: 'portableTextCard',
  title: 'Card with portable text',
  type: 'document',
  fields: [
    
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
      name: 'mainText',
      title: 'Card Text Content',
      type: "blockContent",
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo',
      title: 'logo',
      type: 'image',
      options: { hotspot: true },
    },
   
    {
      name: 'ctaBtnTxt',
      title: 'Call to Action Button Text',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },

  
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
  },
};

  