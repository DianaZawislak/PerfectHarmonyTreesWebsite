export const pageContent = {
    name: "page",
    title: "Page Content",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
    
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'Menulogo',
        title: ' Menu Logo',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'MenuBackground',
        title: ' Menu Background Image',
        type: 'image',
        options: { hotspot: true },
      },

      {
        name: "hero",
        title: "Hero",
        type: "reference",
        to: [{ type: "hero" }],
        description: "Select a hero post to be displayed on this page",
      },   {
        name: "PortableTextArray",
        title: "Portable Text content list",
        type: "array",
        of: [{
          type: "reference",
          to: [{ type: "portableTextCard" }]
        }]
      },
    
      {
        name: "MainContent",
        title: "Main content list",
        type: "array",
        of: [{
          type: "reference",
          to: [{ type: "content" }]
        }]
      },
 
      // Add other fields if needed
   
    ],
    preview: {
        select: {
            title: "title",
            hero: "hero.title",
         
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





  export const Content = {
    name: "content",
    title: " Content",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "header",
        title: "Header",
        type: "string",
      
      },
      {
        name: "SectionDescription",
        title: "Section Description",
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
        validation: (Rule:any) => Rule.required(),
      },

   
    
      {
        name: "content",
        title: "content list",
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
            
         
          },
      prepare(selection: { title?: any; }) {
       
        return {
          title: selection.title
        };
      },
    },
  };

