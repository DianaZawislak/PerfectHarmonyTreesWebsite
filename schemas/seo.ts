import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "Search Engine Optimization",
  type: "document",
  fields: [
    defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title tag for the page. Useful for SEO and social sharing.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "The description for the page. Useful for SEO and social sharing.",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "A list of keywords for the page. Useful for SEO.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "The image to be used for social sharing and previews.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "twitterCard",
      title: "Twitter Card Type",
      type: "string",
      description: 'The type of the Twitter Card (e.g. "summary_large_image" or "summary").',
    }),
    defineField({
      name: "metaRobots",
      title: "Meta Robots",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Index", value: "index" },
          { title: "No Index", value: "noindex" },
          { title: "Follow", value: "follow" },
          { title: "No Follow", value: "nofollow" },
        ],
      },
      description: "The meta robots directives for search engines.",
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "type",
          title: "Type",
          type: "string",
        }),
        defineField({
          name: "url",
          title: "URL",
          type: "url",
        }),
        defineField({
          name: "siteName",
          title: "Site Name",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "twitter",
      title: "Twitter SEO",
      type: "object",
      fields: [
        defineField({
          name: "card",
          title: "Card",
          type: "string",
        }),
        defineField({
          name: "site",
          title: "Site",
          type: "string",
        }),
        defineField({
          name: "creator",
          title: "Creator",
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          
          description: "The image to be used for social sharing and previews.",
          options: {
            hotspot: true,
            source: "image",
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      image: "image",
    },
    prepare(selection) {
      const { title, description, image } = selection;
      return {
        title: title || "No title set",
        subtitle: description || "No description set",
        media: image,
      };
    },
  },
});
