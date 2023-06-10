export const pageContent = {
    name: "page",
    title: "Page Content",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
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
        name: "hero",
        title: "Hero",
        type: "reference",
        to: [{ type: "hero" }],
        description: "Select a hero post to be displayed on this page",
      },
    
      {
        name: "content",
        title: "Main content list",
        type: "array",
        of: [{
          type: "reference",
          to: [{ type: "heroCardArray" }]
        }]
      },
 
      // Add other fields if needed
   
    ],
    preview: {
        select: {
            title: "title",
            hero: "hero.title",
            menu: "menu.title",
            seoTitle: 'seo.title',
            contentTitle: 'content.title',
            footer: 'footer.title',
          },
      prepare(selection: { title?: any; hero?: any; }) {
        const { hero } = selection;
        return {
          title: selection.title,
          subtitle: `Hero: ${hero || 'None'}`,
        };
      },
    },
  };