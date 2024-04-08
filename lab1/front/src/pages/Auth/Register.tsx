import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const Register = () => {
  return (
      <Container maxWidth="sm">
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
        >
          <Typography component="h1" variant="h5">
            请联系学校论坛管理员进行账号注册！
          </Typography>
        </Box>
      </Container>
  )
};

export default Register;
