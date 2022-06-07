import {CollectionConfig} from "payload/types";

const Media: CollectionConfig = {
  labels: { singular: '画像', plural: '画像' },
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        crop: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        crop: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
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