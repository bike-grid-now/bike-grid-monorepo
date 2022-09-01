import { buildCollection } from "@camberi/firecms";

export type Ward = {
  wardNumber: number;
  alderName: string;
  email: string;
  phone: string;
};

export const wardsCollection = buildCollection<Ward>({
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
