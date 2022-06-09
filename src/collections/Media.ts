import {CollectionConfig} from "payload/types";

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 400,
        crop: 'centre',
      }
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    }
  ]
}

export default Media