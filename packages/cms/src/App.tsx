import React, { useCallback } from "react";
import { FirebaseCMSApp } from "@camberi/firecms";

import { firebaseConfig } from "./lib/firebase";
import * as collections from "./collections";
import { authenticator } from "./lib/authenticator";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

export default function App() {
  const wrappedAuthenticator = useCallback(authenticator, []);

  return (
    <FirebaseCMSApp
      name={"Bike Grid Now"}
      logo={
        "https://firebasestorage.googleapis.com/v0/b/bike-grid-now.appspot.com/o/sticker.jpg?alt=media&token=7b8408ef-f554-4546-8480-311d705f8231"
      }
      authentication={wrappedAuthenticator}
      collections={[
        collections.eventsCollection,
        collections.postsCollection,
        collections.wardsCollection,
        collections.organizersCollection,
        collections.adminsCollection,
        collections.usersCollection,
      ]}
      firebaseConfig={firebaseConfig}
    />
  );
}
