export default {
  name: "office",
  type: "document",
  title: "Offices",
  fields: [
    {
      name: "name",
      type: "string",
      description: "Name of the office the candidate is running for.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
