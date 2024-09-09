module.exports = {
  schema: 'prisma/schema.prisma',
  backend: {
    generator: 'nexus',
    onDelete: true,
    output: 'src/graphql',
  },
  frontend: {
    admin: false,
  },
};
