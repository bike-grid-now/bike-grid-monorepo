import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
  Authenticator,
  buildCollection,
  buildProperty,
  EntityCustomView,
  EntityReference,
  FirebaseCMSApp,
  Properties,
} from "@camberi/firecms";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

const firebaseConfig = {
  apiKey: "AIzaSyDxbVRKzlIaOj-yyVSA_SRiHoMWtSjj8PI",
  authDomain: "bike-grid-now.firebaseapp.com",
  projectId: "bike-grid-now",
  storageBucket: "bike-grid-now.appspot.com",
  messagingSenderId: "87272368171",
  appId: "1:87272368171:web:07c10c4954cf7fa7ef226e",
  measurementId: "G-EDKYCVXXW8",
};

type Event = {
  eventName: string;
  date: Date;
  rsvpLink: string;
  wards: EntityReference[];
  poster: string;
  media: string[];
};

type Ward = {
  wardNumber: number;
  alderName: string;
  email: string;
  phone: string;
};

type Organizer = {
  name: string;
  description: string;
  image: string;
};

type Admin = {
  email: string;
};

interface DeployHook {
  webhookUrl: string;
  active: boolean;
}

const wardsCollection = buildCollection<Ward>({
  name: "Wards",
  singularName: "Ward",
  path: "wards",
  properties: {
    wardNumber: {
      name: "Ward Number",
      dataType: "number",
      validation: { required: true },
    },
    alderName: {
      name: "Alder Name",
      dataType: "string",
      validation: { required: true },
    },
    email: {
      name: "Email",
      dataType: "string",
      email: true,
      validation: { required: true },
    },
    phone: {
      name: "Phone Number",
      dataType: "string",
      validation: {
        required: true,
        matchesMessage: "Phone number must be in the format: xxx-xxx-xxxx",
        matches: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      },
    },
  },
});

const eventsCollection = buildCollection<Event>({
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

const organizersCollection = buildCollection<Organizer>({
  name: "Organizers",
  singularName: "Organizer",
  path: "organizers",
  properties: {
    name: {
      name: "Name",
      dataType: "string",
      validation: { required: true },
    },
    description: {
      name: "Description",
      dataType: "string",
      multiline: true,
      validation: { required: true },
    },
    image: {
      name: "Image",
      dataType: "string",
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    },
  },
});

const propertiesType: Properties = {
  image: {
    name: "Image",
    dataType: "string",
    storage: {
      storagePath: "images",
      acceptedFiles: ["image/*"],
    },
  },
  heading: {
    dataType: "map",
    properties: {
      content: {
        name: "Content",
        dataType: "string",
      },
      level: {
        name: "Level",
        dataType: "string",
        enumValues: [
          { id: "H1", label: "Heading 1" },
          { id: "H2", label: "Heading 2" },
          { id: "H3", label: "Heading 3" },
          { id: "H4", label: "Heading 4" },
          { id: "H5", label: "Heading 5" },
          { id: "H6", label: "Heading 6" },
        ],
      },
    },
  },
};

const pagesCollection = buildCollection({
  name: "Pages",
  singularName: "Page",
  path: "pages",
  properties: {
    content: {
      dataType: "array",
      name: "Content",
      oneOf: {
        typeField: "type",
        valueField: "value",
        properties: {
          ...propertiesType,
        },
      },
    },
  },
});

const adminsCollection = buildCollection<Admin>({
  name: "Admins",
  singularName: "Admin",
  path: "admins",
  properties: {
    email: {
      name: "Email",
      dataType: "string",
      validation: { required: true },
    },
  },
});

const deployHooksCollection = buildCollection<DeployHook>({
  name: "Deploy Hooks",
  singularName: "Deploy Hook",
  path: "deployHooks",
  properties: {
    webhookUrl: {
      name: "Webhook URL",
      dataType: "string",
      validation: { required: true },
    },
    active: {
      name: "Active",
      dataType: "boolean",
      defaultValue: false,
    },
  },
});

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function DeployView() {
  const handleDeploy = async () => {
    const coll = collection(db, "deployHooks");

    const q = query(coll, where("active", "==", true));
    const hooks = await getDocs(q);

    hooks.forEach((x) => {
      const { webhookUrl } = x.data();

      fetch(webhookUrl, {
        method: "POST",
      });
    });
  };

  return (
    <div>
      <h1>Click the button below to deploy!</h1>
      <button onClick={handleDeploy}>Deploy</button>
    </div>
  );
}

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user }) => {
      const adminRef = collection(db, "admins");
      const q = query(adminRef);
      const querySnapshot = await getDocs(q);

      let admins: any = [];

      querySnapshot.forEach((doc) => {
        admins.push(doc.data().email.toLowerCase());
      });

      if (user?.email && admins.includes(user.email.toLowerCase())) {
        return true;
      } else {
        throw Error(
          "This user has not been authorized to access this application"
        );
      }
    },
    []
  );

  const customViews = [
    {
      path: "deploy",
      name: "Deploy",
      description: "Use this to re-deploy after you make changes.",
      view: <DeployView />,
    },
  ];

  return (
    <FirebaseCMSApp
      name={"Bike Grid Now"}
      logo={
        "https://firebasestorage.googleapis.com/v0/b/bike-grid-now.appspot.com/o/sticker.jpg?alt=media&token=7b8408ef-f554-4546-8480-311d705f8231"
      }
      authentication={myAuthenticator}
      collections={[
        eventsCollection,
        wardsCollection,
        organizersCollection,
        adminsCollection,
        deployHooksCollection,
      ]}
      views={customViews}
      firebaseConfig={firebaseConfig}
    />
  );
}
