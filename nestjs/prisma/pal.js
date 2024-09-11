module.exports = {
  schema: 'prisma/schema.prisma',
  backend: {
    generator: 'nexus',
    onDelete: true,
    output: 'src/generated/nexus',
  },
  frontend: {
    admin: false,
  },
};
