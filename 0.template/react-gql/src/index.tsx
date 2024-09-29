import './index.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useQuery, Client, cacheExchange, fetchExchange, Provider } from 'urql';
import { graphql } from './gql/gql';

const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
  // fetchOptions: () => {
  //   const token = getToken();
  //   return {
  //     headers: { authorization: token ? `Bearer ${token}` : '' },
  //   };
  // },
});

const App = () => (
  <Provider value={client}>
    <Page />
    <Page2 />
  </Provider>
);

const cityQueryDocument = /* GraphQL */ graphql(`
  query CityAndUser {
    cities: findManyCity(take: 2) {
      id
      name
      country {
        code
        name
      }
    }
    users: findManyUser {
      username
    }
  }
`);

const cityQueryDocument2 = /* GraphQL */ graphql(`
  query CityAndUser2 {
    findManyCity(take: 2) {
      id
      name
      country {
        code
        name
      }
    }
  }
`);



function Page () {
  // const [{ data, fetching }] = useQuery({ query: cityQueryDocument })
  const [{ data, fetching }] = useQuery({ query: cityQueryDocument })
  if (fetching) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Hello, world!</h1>
      <div>{data?.cities[0].country.code}</div>
    </div>
  )
}

function Page2 () {
  const [{ data, fetching }] = useQuery({ query: cityQueryDocument2 })
  if (fetching) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hello, world!</h1>
      <div>{data?.findManyCity[0].country.code}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
