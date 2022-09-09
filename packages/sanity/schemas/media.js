export default {
  name: "media",
  type: "image",
  title: "Image",
  fields: [
    {
      name: "altText",
      title: "Alt text",
      description:
        "Alt text will be read out to screen readers. Please describe what your image contains :)",
      validation: (Rule) => Rule.required(),
      type: "text",
      rows: 2,
      options: {
        isHighlighted: true,
      },
    },
  ],
};
