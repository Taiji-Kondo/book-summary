import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  labels: { singular: 'ユーザー', plural: 'ユーザー' },
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    }
  ],
};

export default Users;