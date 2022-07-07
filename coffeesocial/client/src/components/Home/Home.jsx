import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Avatar, Button, CssBaseline, Link, TextField, Grid, Typography, Container, Card } from '@mui/material/';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "../App/App.css";
import "./Home.css";

function Home() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (

    <Route>
      <ThemeProvider theme={darkTheme}>


        <Box>
          <Card variant="outlined">
            <CardContent>
            </CardContent>
          </Card>
          <Box>

          </Box>
        </Box>
      </ThemeProvider>
    </Route>


  );
}

export default Home;
