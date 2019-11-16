import graphql from 'babel-plugin-relay/macro';

export const allQuestionsQuery = graphql`
  query getAllQuestions {
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
`;
