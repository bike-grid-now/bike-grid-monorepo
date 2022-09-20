export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (R) => R.required().max(70),
      description:
        "Site title as it will appear in the browser tab and in Google. This will be added after all titles.",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      validation: (R) => R.required().max(160),
      description: "Site description that will appear in Google.",
    },
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (R) => R.required(),
      description: "Title for the hero that appears on our homepage.",
    },
    {
      name: "heroTagline",
      title: "Hero Tagline",
      type: "text",
      validation: (R) => R.required(),
      description: "Appears below the hero title on our homepage.",
    },
  ],
};
