import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Contents")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("globalSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings"].includes(listItem.getId())
      ),
    ]);
