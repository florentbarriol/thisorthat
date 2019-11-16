import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const API_ENDPOINT = 'https://api.graph.cool/relay/v1/ck26lesxa8mm00163xjqhol8a';

function fetchQuery(operation, variables) {
  return fetch(API_ENDPOINT, {
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
