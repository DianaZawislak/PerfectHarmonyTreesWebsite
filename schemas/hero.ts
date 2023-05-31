import {defineField, defineType} from 'sanity'




export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
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
      name: 'CTA_Main',
      title: 'Call to Action main text',
      type: 'array',
      of: [{ type: 'string' }],
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
      name: 'ctaText_Subtitle',
      title: 'Call to Action  Subtitle Text',
      type: 'array',
      of: [{ type: 'string' }],
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

  