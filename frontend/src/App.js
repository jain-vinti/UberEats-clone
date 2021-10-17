import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import memories from './images/memories.png';

import { getPosts } from './actions/posts';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center"> Memories </Typography>
        <img src={memories} alt="memories" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container direction="column-reverse" justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}></Posts>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
