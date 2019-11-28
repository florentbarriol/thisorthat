import graphql from 'babel-plugin-relay/macro';

export const questionFragment = graphql`
  fragment QuestionFragment on Question {
    id
    label
    answers {
      ...AnswerFragment
    }
  }
`;

export const answerFragment = createFragmentContainer(Answergraphql`
  fragment AnswerFragment on Answer {
    id
    count
    label
    url
  }
`;
