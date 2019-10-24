import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const CardActionsStyled = styled(CardActions)`
  justify-content: center;
`;
export const Choice = ({ title, onClick, urlVideo }) => (
  <Card component="article">
    <iframe
      title={title}
      width="560"
      height="315"
      src={urlVideo}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <CardContent>
      <Typography variant="h3" component="h1" align="center">
        {title}
      </Typography>
    </CardContent>
    <CardActionsStyled>
      <Button size="large" color="primary" onClick={onClick}>
        Vote for this !
      </Button>
    </CardActionsStyled>
  </Card>
);

Choice.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  urlVideo: PropTypes.string,
};
