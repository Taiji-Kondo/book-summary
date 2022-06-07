import { CollectionConfig } from 'payload/types';

const Authors: CollectionConfig = {
  slug: 'authors',
  auth: true,
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
    }
  ],
  timestamps: false,
};

export default Authors;