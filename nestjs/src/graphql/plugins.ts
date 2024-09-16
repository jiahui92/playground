// import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import { ApolloServerPlugin } from '@apollo/server';

// TODO: 当gql报错时，data可能为null，此时兜底为 {}，防止前端使用报错，这里处理可能会影响到分页逻辑，暂不处理先
// export const FormatResponsePlugin: ApolloServerPlugin = {
//   async requestDidStart() {
//     return {
//       async willSendResponse(requestContext) {
//         if (requestContext.response?.data === null) {
//           requestContext.response.data = {};
//         }
//       },
//     };
//   },
// };
