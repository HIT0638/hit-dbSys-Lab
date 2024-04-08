import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import {Typography, Stack, Container, Button, Grid, Box, Paper} from '@mui/material';
import Link from 'react-router-dom'
import Counter from '@/components/Counter/Counter';
import Head from '@/components/Head/Head'
import LeftAside from "@/components/LeftAside/LeftAside";
import RightAside from "@/components/RightAside/RightAside";
import Main from "@/components/Main/Main";


const Home = () => {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Head />
          <Grid container sx={{ flexGrow: 1 }}>
              <Grid item xs={2.5}>
                  <LeftAside/>
              </Grid>
              <Grid item xs={7}>
                  <Main />
              </Grid>
              <Grid item xs={2.5}>
                  <RightAside/>
              </Grid>
          </Grid>
      </Box>
  );
};

export default Home;
