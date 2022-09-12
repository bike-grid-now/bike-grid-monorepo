export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the post (appears in the heading)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      description:
        "Path the post will be published at (eg. a slug of bike-grid-lincoln-avenue would be published at  bikegridnow.org/posts/bike-grid-lincoln-avenue)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "media",
      title: "Image",
      description: "Image that will appear at the top of the post.",
    },
    {
      name: "date",
      type: "richDate",
      title: "Date",
      description: "This is assumed to be in CST.",
      options: {
        dateFormat: "MM/DD/YYYY \\at",
        timeFormat: "h:mm a",
        timeStep: 5,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "This will show up on the event page.",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "poster.asset",
    },
  },
};
