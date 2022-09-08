import { format } from "date-fns";

export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      name: "name",
      type: "string",
      description:
        "Name of the event (eg. Bike Grid - Lincoln Avenue Streetscape Edition)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
      description:
        "Path the event will be published at (eg. a slug of bike-grid-lincoln-avenue would be published at  bikegridnow.org/events/bike-grid-lincoln-avenue",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      type: "datetime",
      title: "Date",
      description: "This is assumed to be in CST.",
      options: {
        dateFormat: "MM/DD/YYYY \\at",
        timeFormat: "h:mm a",
        timeStep: 5,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "poster",
      type: "media",
      title: "Poster",
    },
    {
      name: "rsvpLink",
      type: "string",
      description: "Link to the event's RSVP page.",
    },
    {
      name: "description",
      type: "blockContent",
      description: "This will show up on the event page.",
    },
    {
      name: "media",
      type: "array",
      of: [{ type: "media" }],
      description:
        "Any extra images. These will be displayed in a carousel below the event.",
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "date",
      media: "poster.image",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: format(new Date(subtitle), "M/dd/yyyy 'at' h:mm a"),
      };
    },
  },
  orderings: [
    {
      title: "Event Date, Old",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
    {
      title: "Event Date, New",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};
