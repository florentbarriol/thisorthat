/**
 * @flow
 * @relayHash f722977720aa25f3d989d85151dba970
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type quizAllQuestionsQueryVariables = {||};
export type quizAllQuestionsQueryResponse = {|
  +allQuestions: $ReadOnlyArray<{|
    +id: string,
    +label: string,
    +answers: ?$ReadOnlyArray<{|
      +count: ?number,
      +id: string,
      +label: string,
      +url: string,
    |}>,
  |}>
|};
export type quizAllQuestionsQuery = {|
  variables: quizAllQuestionsQueryVariables,
  response: quizAllQuestionsQueryResponse,
|};
*/


/*
query quizAllQuestionsQuery {
  allQuestions {
    id
    label
    answers {
      count
      id
      label
      url
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "label",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allQuestions",
    "storageKey": null,
    "args": null,
    "concreteType": "Question",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "answers",
        "storageKey": null,
        "args": null,
        "concreteType": "Answer",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "quizAllQuestionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "quizAllQuestionsQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "quizAllQuestionsQuery",
    "id": null,
    "text": "query quizAllQuestionsQuery {\n  allQuestions {\n    id\n    label\n    answers {\n      count\n      id\n      label\n      url\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '53d930d7742d90a80b9f1d323375a028';
module.exports = node;
