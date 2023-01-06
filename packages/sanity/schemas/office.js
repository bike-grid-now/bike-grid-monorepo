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
    {
      name: "wardNumber",
      type: "number",
      description: "The ward the office is located in. Leave empty for mayor.",
    },
  ],
};
