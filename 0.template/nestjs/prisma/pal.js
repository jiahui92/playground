module.exports = {
  schema: 'prisma/schema.prisma',
  backend: {
    generator: 'nexus',
    output: 'src/generated/nexus',
  },
};
