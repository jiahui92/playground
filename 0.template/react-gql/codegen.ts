
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: "schema.gql",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
    },
  }
};

export default config;
