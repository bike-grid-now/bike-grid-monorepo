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
      name: "ward",
      type: "string",
      description: "The ward the office is located in. Put 'city' for Mayor.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
