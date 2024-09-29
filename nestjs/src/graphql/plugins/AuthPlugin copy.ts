import { ApolloServerPlugin } from '@apollo/server';
import { FieldNode, ArgumentNode, Kind } from 'graphql';

export const createQuerySizeLimitPlugin = (limit: number) => {
  const QuerySizeLimitPlugin: ApolloServerPlugin = {
    async requestDidStart() {
      return {
        async didResolveOperation({ document }) {
          // 使用filter过滤出数组之后再处理take
          const selections: FieldNode[] = [];
          document.definitions.forEach((definition) => {
            if (definition.kind === Kind.OPERATION_DEFINITION) {
              if (definition.operation === 'query') {
                definition.selectionSet.selections.forEach((selection) => {
                  if (selection.kind === 'Field') {
                    if (/^(findMany|groupBy).*$/.test(selection.name.value)) {
                      selections.push(selection);
                    }
                  }
                });
              }
            }
          });

          selections.forEach((selection) => {
            const takeArg = selection.arguments.find(
              (arg) => arg.name.value === 'take',
            );

            if (takeArg && takeArg.value.kind === Kind.INT) {
              const take = parseInt(takeArg.value.value);
              if (take > limit) {
                (takeArg.value as any).value = limit;
                // throw new ForbiddenException('Query size is too large');
              }
            } else {
              const args: ArgumentNode[] = [
                ...(selection.arguments || []),
                {
                  kind: Kind.ARGUMENT,
                  name: { kind: Kind.NAME, value: 'take' },
                  value: { kind: Kind.INT, value: limit.toString() },
                },
              ];
              (selection as any).arguments = args;
            }
          });
        },
      };
    },
  };
  return QuerySizeLimitPlugin;
};
