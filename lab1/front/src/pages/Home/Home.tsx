import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import {Typography, Stack, Container, Button} from '@mui/material';
import Link from 'react-router-dom'
import Counter from '@/components/Counter/Counter';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
        <div><Button><a href={'login'}>to Login</a></Button></div>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Vite-MUI-TS Template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
        </Typography>
      </Stack>
      <TemplateTester />
      <Counter />
    </Container>
  );
};

export default Home;
