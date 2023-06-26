export const pageContentV2 = {
    name: "pagev2",
    title: "Page Content V2",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (Rule: any) => Rule.required(),
      },

      {
        name: "hero",
        title: "Hero",
        type: "reference",
        to: [{ type: "hero" }],
        description: "Select a hero post to be displayed on this page",
      },
      {
        name: 'logo',
        title: 'logo',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: "mainContent",
        title: "Main content list",
        type: "array",
        of: [
          { type: "reference", to: [{type: "heroCardArray" }] },
      
        ],
      },
    ],
    preview: {
      select: {
        title: "title",
        hero: "hero.title",
      },
      prepare(selection: { title?: any; hero?: any }) {
        const { hero } = selection;
        return {
          title: selection.title,
          subtitle: `Hero: ${hero || "None"}`,
        };
      },
    },
  };
  


  export const selectionSchema = {
    name: "selection",
    title: "Selection",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      // Add other fields if needed
    ],
  };