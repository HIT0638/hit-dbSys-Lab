import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const Forget = () => {
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
                    忘记密码请联系学校论坛管理员进行更改！
                </Typography>
            </Box>
        </Container>
    )
}

export default Forget;