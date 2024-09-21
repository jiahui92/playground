import { objectType } from 'nexus';

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  description: `This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments`,
  definition(t) {
    t.string('id');
    t.string('username');
    t.string('password');
    t.string('email');
    t.json('roles');
    t.nullable.boolean('isActive');
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});
