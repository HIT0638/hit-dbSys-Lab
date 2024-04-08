import React from 'react';
import {List, ListItem, ListItemText, Paper, Typography} from "@mui/material";


const RightAside = () => {
    return (
        <Paper style={{ width: '100%', height: '100%', borderRadius: '0'}}  sx={{ padding: 2 }}>
            <Typography variant="h6">主题热度榜</Typography>
            <List>
                <ListItem button>
                    <ListItemText primary="主题1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="主题2" />
                </ListItem>
                {/* More topics */}
            </List>
        </Paper>
    )
}

export default RightAside;