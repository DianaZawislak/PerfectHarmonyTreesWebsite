import { defineField, defineType } from "sanity";

export const heroCard = {
  name: "heroCard",
  title: "Hero Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
 

    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
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
      name: "cardText",
      title: "Card Text",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'ModalText',
      title: 'Modal Description Text Content',
      type: "blockContent",
    },

    {
      name: "ctaBtnTxt",
      title: " Button Text",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
    },
  },
};

export const heroCardArray = {
  name: "heroCardArray",
  title: "Hero Card Array",
  type: "object",
  fields: [
    {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    }
    ,
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "heroCard" }],
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          min: {
            (arg0: number): {
              (): any;
              new (): any;
              max: { (arg0: number): any; new (): any };
            };
            new (): any;
          };
        };
      }) => Rule.required().min(1).max(3),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
