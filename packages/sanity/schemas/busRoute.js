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
    {
      name: "trackerBounds",
      type: "object",
      title: "Tracker Bounds",
      description:
        "Square that the tracker should be active in. Helps keep things private :)",
      fields: [
        {
          name: "bottomLeft",
          type: "geopoint",
          title: "Bottom Left",
          description: "The bottom left point",
          initialValue: {
            alt: 0,
          },
        },
        {
          name: "topRight",
          type: "geopoint",
          title: "Top Right",
          description: "The top right point",
          initialValue: {
            alt: 0,
          },
        },
      ],
    },
    {
      name: "stops",
      type: "array",
      title: "Stops",
      of: [
        {
          type: "object",
          name: "stop",
          title: "Stop",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Stop title",
              description: "The title of the stop. Shows up next to the icon.",
            },
            {
              name: "subtitle",
              type: "string",
              title: "Subtitle",
              description: "Appears below the title on the map.",
            },
            {
              name: "time",
              type: "string",
              title: "Time",
              description: "Time of arrival at the stop.",
            },
            {
              name: "icon",
              type: "media",
              title: "Icon",
              description: "Optional icon to show next to the stop.",
            },
            {
              name: "coordinates",
              type: "geopoint",
              title: "Coordinates",
              description: "The latitude and longitude of the stop.",
              initialValue: {
                alt: 0,
              },
            },
          ],
        },
      ],
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
