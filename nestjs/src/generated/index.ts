import { paljs } from '@paljs/nexus';
import { makeSchema } from 'nexus';
import { getPath } from 'src/common/utils';
import * as genTypes from './nexus';

export function getNexusSchema(shouldGenerateArtifacts: boolean) {
  const schema = makeSchema({
    types: [genTypes],
    shouldExitAfterGenerateArtifacts: shouldGenerateArtifacts,
    shouldGenerateArtifacts,
    plugins: [paljs()],
    outputs: {
      schema: getPath('src/generated/schema.gql'),
      typegen: getPath('src/generated/nexus-typings.ts'),
    },
    prettierConfig: getPath('.prettierrc'),
  });
  return schema;
}
