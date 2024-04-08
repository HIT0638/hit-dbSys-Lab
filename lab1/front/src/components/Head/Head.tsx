import React, {FunctionComponent} from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import {useNavigate, useNavigation} from "react-router-dom";


const Head: FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    HIT校园论坛欢迎您！
                </Typography>
                <Button color="inherit">联系管理员</Button>
                <Button color="inherit">举报</Button>
                <Button color="inherit">帮助</Button>
                <Button color="inherit" onClick={() => {localStorage.clear(); navigate('/login')}}>退出</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Head;