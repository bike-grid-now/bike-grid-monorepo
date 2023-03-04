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
      name: "runoff",
      type: "string",
      initialValue: "no",
      description:
        "Is this candidate in the runoff",
      options: {
        list: [
          { title: "✅ Yes", value: "yes" },
          { title: "❌ No", value: "no" },
          { title: "Contacted", value: "contacted" },
        ],
      },
    },
    {
      name: "supportsPlatform",
      type: "string",
      initialValue: "contacted",
      description: "Supports the BGN platform.",
      options: {
        list: [
          { title: "✅ Yes", value: "yes" },
          { title: "❌ No", value: "no" },
          { title: "Contacted", value: "contacted" },
        ],
      },
    },
    {
      name: "link",
      type: "string",
      title: "Link",
      description:
        "The link to the candidate's site - or some other think you'd like to link.",
    },
    {
      name: "linkText",
      type: "string",
      title: "Link Text",
      description:
        "The text of the link to the candidate's site. This is the text that will be shown for the link.",
    },
  ],
};
