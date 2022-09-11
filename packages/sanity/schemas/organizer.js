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
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      description: "Put a pic of your bike here!",
      type: "media",
    },
  ],
};
