import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
  ],
};
