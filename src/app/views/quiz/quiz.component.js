import React, { useState } from 'react';
import styled from 'styled-components';
import { Choice } from './choice.component';
import { Typography } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100vh;
  margin: auto;
`;

const Choices = styled.div`
  display: flex;

  & > *:first-child {
    margin-right: ${props => props.theme.spacing(2)}px;
  }
`;

const Answer = () => (
  <Typography component="h1" variant="h2">
    <span role="img" aria-label="well done">
      🎉
    </span>{' '}
    Thanks for your answer{' '}
    <span role="img" aria-label="well done">
      🎉
    </span>
  </Typography>
);

const choices = [
  { title: 'Payback', urlVideo: 'https://www.youtube.com/embed/P6GmT-WJR_k' },
  { title: 'ID2', urlVideo: 'https://www.youtube.com/embed/6DOE4_wt7mo' },
];

export const Quiz = () => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const handleChoice = () => setHasAnswered(true);
  return (
    <Container>
      {hasAnswered ? (
        <Answer />
      ) : (
        <>
          <Typography component="h1" variant="h3" align="center" gutterBottom>
            Make your choice
          </Typography>
          <Choices>
            {choices.map(choice => (
              <Choice {...choice} onClick={handleChoice} />
            ))}
          </Choices>
        </>
      )}
    </Container>
  );
};
