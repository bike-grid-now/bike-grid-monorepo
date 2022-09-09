export default {
  name: "organizer",
  type: "document",
  title: "Organizer",
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      description: "Put a pic of your bike here!",
      type: "image",
    },
  ],
};
