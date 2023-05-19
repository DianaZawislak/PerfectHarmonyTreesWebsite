export const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'CTA_Main',
        title: 'Call to Action main text',
        type: 'string',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },    {
        name: 'logo',
        title: 'logo',
        type: 'image',
        options: { hotspot: true },
      
      },
      {
        name: 'ctaText_Subtitle',
        title: 'Call to Action  Subtitle Text',
        type: 'string',
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
  