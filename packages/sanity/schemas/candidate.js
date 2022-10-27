export default {
  name: "candidate",
  type: "document",
  title: "Candidates",
  fields: [
    {
      name: "name",
      type: "string",
      description: "Name of the candidate",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "office",
      type: "reference",
      description:
        "The office the candidate is running for (check to make sure one exists before adding it!)",
      to: [{ type: "office" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "supportsPlatform",
      type: "boolean",
      initialValue: false,
      description: "Supports the BGN platform.",
    },
  ],
};
