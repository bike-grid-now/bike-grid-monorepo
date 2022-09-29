export default {
  name: "busRoute",
  type: "document",
  title: "Bus Routes",
  fields: [
    {
      name: "name",
      type: "string",
      description: "Name of the bike bus route (eg. Halsted South)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
      description: "Slug of the bike bus",
    },
    {
      name: "runInfo",
      type: "text",
      title: "Run Info",
      description:
        "Info for the bike bus run (eg. meeting place, ending place).",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "headerImage",
      title: "Header Image",
      type: "media",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "runInfo",
      media: "headerImage.asset",
    },
  },
};
