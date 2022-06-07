import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
  labels: { singular: 'カテゴリー', plural: 'カテゴリー' },
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default Categories;