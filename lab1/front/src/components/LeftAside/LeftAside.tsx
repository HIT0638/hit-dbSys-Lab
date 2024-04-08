import {Button, Paper, Typography, TextField, Container} from '@mui/material';
import React, {useEffect} from 'react';
import './LeftAside.css';


const LeftAside = () => {
    const [userName, setUserName] = React.useState<string | null>('');
    const [userRole, setUserRole] = React.useState<string | null>('');
    const [userId, setUserId] = React.useState<string | null>('');

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        const userId = localStorage.getItem('userId');
        const userName = localStorage.getItem('userName');

        if (userName) {
            setUserName(userName);
        }

        if (userId) {
            setUserId(userId);
        }

        if (userRole === 'admin') {
            setUserRole('管理员');
        } else if (userRole === 'student') {
            setUserRole('学生');
        } else if (userRole === 'teacher') {
            setUserRole('老师')
        }
    }, []);


    return (
            <Paper style={{ width: '100%', height: '100%', borderRadius: '0'}} sx={{ padding: 2 }} className="LeftAside">
                <Typography variant="h6">个人资料</Typography>
                <Typography>
                    账号: {userId}
                </Typography>
                <Typography>
                    姓名: {userName}
                </Typography>
                <Typography>
                    身份: {userRole}
                </Typography>

                {/* Search Form */}
                <TextField label="Search" variant="outlined" fullWidth margin="normal" />
                <Button variant="contained" fullWidth>Search</Button>
            </Paper>
    )
}

export default LeftAside;