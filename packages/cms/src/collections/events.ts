import { buildCollection, EntityReference } from "@camberi/firecms";

export type Event = {
  eventName: string;
  date: Date;
  rsvpLink: string;
  wards: EntityReference[];
  poster: string;
  media: string[];
};

export const eventsCollection = buildCollection<Event>({
  name: "Events",
  singularName: "Event",
  path: "events",
  properties: {
    poster: {
      name: "Poster",
      dataType: "string",
      validation: { required: true },
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    },
    eventName: {
      name: "Event Name",
      validation: { required: true },
      dataType: "string",
      description:
        "Name of the event (Bike Grid - Lincoln Avenue Streetscape Edition)",
    },
    date: {
      name: "Date",
      validation: { required: true },
      dataType: "date",
    },
    rsvpLink: {
      name: "RSVP Link",
      dataType: "string",
      description: "Link to the event's RSVP page",
      url: true,
    },
    wards: {
      dataType: "array",
      name: "Wards",
      description: "Select the ward(s) that the event will be held in",
      of: {
        dataType: "reference",
        path: "wards",
      },
    },
    media: {
      name: "Media",
      dataType: "array",
      of: {
        dataType: "string",
        storage: {
          storagePath: "images",
          acceptedFiles: ["image/*"],
        },
      },
    },
  },
});
