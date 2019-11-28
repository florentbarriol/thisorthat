import React, { useState } from 'react';
import styled from 'styled-components';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { Choice } from './choice.component';
import { Typography } from '@material-ui/core';
import graphql from 'babel-plugin-relay/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 98%;
  min-height: 100vh;
  margin: auto;
`;

const Choices = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    margin: ${props => props.theme.spacing(2)}px;
  }
`;

const Versus = styled.div`
  display: flex;
  align-items: center;
  font-size: 6rem;
`;

const AnswerTypographyStyled = styled(Typography)`
  text-align: center;
`;

const Answer = () => (
  <AnswerTypographyStyled component="h1" variant="h2">
    <span role="img" aria-label="well done">
      🎉
    </span>{' '}
    Thanks for your answer{' '}
    <span role="img" aria-label="well done">
      🎉
    </span>
  </AnswerTypographyStyled>
);

const choices = [
  { title: 'Payback', urlVideo: 'https://www.youtube.com/embed/P6GmT-WJR_k' },
  { title: 'ID2', urlVideo: 'https://www.youtube.com/embed/6DOE4_wt7mo' },
];

const allQuestionsQuery = graphql`
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
`;

export const Quiz = () => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const handleChoice = () => setHasAnswered(true);

  const data = useLazyLoadQuery(allQuestionsQuery);
  const { allQuestions } = data;
  console.log(allQuestions);
  return (
    <Container>
      {hasAnswered && <Answer />}
      {!hasAnswered && allQuestions && (
        <>
          <Typography component="h1" variant="h3" align="center" gutterBottom>
            Make your choice
          </Typography>
          <Choices>
            <Choice {...allQuestions[0]} onClick={handleChoice} />
            <Versus>
              <span role="img" aria-label="versus">
                🤔
              </span>
            </Versus>
            <Choice {...allQuestions[1]} onClick={handleChoice} />
          </Choices>
        </>
      )}
    </Container>
  );
};
