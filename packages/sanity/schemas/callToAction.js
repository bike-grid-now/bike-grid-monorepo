import { AiOutlineShareAlt } from "react-icons/fi";

export default {
  name: "callToAction",
  type: "document",
  title: "Calls to Action",
  icon: AiOutlineShareAlt,
  fields: [
    {
      name: "text",
      description: "Text to display on the Call to Action",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      description: "Link to the page to navigate to (include https://)",
      validation: (Rule) => {
        Rule.required();
        Rule.uri().error("Must be a valid URL");
      },
      type: "url",
    },
    {
      name: "enabled",
      description: "Should this Call to Action be displayed on the site?",
      type: "boolean",
      value: false,
      validation: (Rule) => Rule.required(),
    },
  ],
};
