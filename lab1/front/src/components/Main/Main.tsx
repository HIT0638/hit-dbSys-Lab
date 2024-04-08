import React from 'react';
import {List, ListItem, ListItemText, Paper, Typography} from "@mui/material";


const Main = () => {
    return (
        <Paper style={{ width: '100%', height: '100%', borderRadius: '0'}} sx={{ padding: 2 }}>
            <Typography variant="h5">中心页面</Typography>
            <Typography paragraph>
                这里是Posts的标题列表
            </Typography>
        </Paper>
    )
}

export default Main;