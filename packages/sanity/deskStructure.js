import S from "@sanity/desk-tool/structure-builder";
import { FiAward } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";

export default () =>
  S.list()
    .title("Contents")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("globalSettings")
        .icon(FiSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "candidate", "office"].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title("Candidates")
        .icon(FiAward)
        .child(
          S.list()
            .title("Filter candidates by")
            .items([
              S.listItem()
                .title("All Candidates")
                .child(S.documentTypeList("candidate").title("All Candidates")),
              S.listItem()
                .title("By Office")
                .icon(FiBriefcase)
                .child(
                  S.documentTypeList("office")
                    .title("Offices")
                    .child((officeId) =>
                      S.documentTypeList("candidate")
                        .filter("$officeId == office._ref")
                        .params({ officeId })
                    )
                ),
            ])
        ),
    ]);
