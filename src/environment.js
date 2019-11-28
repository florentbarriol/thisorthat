import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const { REACT_APP_SCHEMA } = process.env;

function fetchQuery(operation, variables) {
  return fetch(REACT_APP_SCHEMA, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
