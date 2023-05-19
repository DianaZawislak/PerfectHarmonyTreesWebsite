// menu.ts
export const menu = {
    name: "menu",
    title: "Menu",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: 'logo',
        title: 'logo',
        type: 'image',
        options: { hotspot: true },
      
      },
      {
        name: "items",
        title: "Menu Items",
        type: "array",
        of: [{ type: "menuItem" }],
      },
    ],
  };
  
  export const menuItem = {
    name: "menuItem",
    title: "Menu Item",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "link",
        title: "Link",
        type: "string",
      },
 
    ],
    preview: {
      select: {
        title: "title",
      },
    },
  };