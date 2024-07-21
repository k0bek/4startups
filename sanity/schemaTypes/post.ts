export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      title: "Language",
      name: "language",
      type: "string",
      initialValue: "english",
      options: {
        list: [
          { title: "polish", value: "pl" },
          { title: "english", value: "en" },
        ],
      },
    },
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
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A brief summary of the post for previews and summaries.",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
