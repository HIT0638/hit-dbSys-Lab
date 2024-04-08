import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography
} from '@mui/material';
import request from "../../../util/request";

const Login = () => {
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');


    const handleSubmit = async () => {
        try {
            const user = [userId, password];
            const response = await request.post('/login', user);

            setUserName(response.data.userName);
            setUserRole(response.data.userRole);

            // 保存到 localStorage
            localStorage.setItem('userId', userId);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userRole', userRole);

            // 根据用户角色进行跳转
            switch (userRole) {
                case 'admin':
                    navigate("/admin/home")
                    break;
                default:
                    navigate('/home');
            }

        } catch (error) {

            alert("登录失败, 用户名或密码错误。" + userId + "，" + password)
            // 错误处理，例如设置错误状态
            console.error('登录失败', error);
            console.log(userId, password)
            // 可以在这里设置一个状态来显示错误信息
        }
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* 可以添加一个logo或标题 */}
                <Typography component="h1" variant="h5">
                    登录账号
                </Typography>

                <Box component="form" noValidate  sx={{ mt: 1 }} >
                    {/* 用户名输入 */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="userID"
                        label="用户名(学号/教工号)"
                        name="userID"
                        autoComplete="userID"
                        autoFocus
                        onChange={(e) => {setUserId(e.target.value)}}
                    />

                    {/* 密码输入 */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="密码"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {setPassword(e.target.value)}}
                    />

                    {/* 登录按钮 */}
                    <Button
                        onClick={() => { handleSubmit();return false }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        登录
                    </Button>
                    <Box display="flex" justifyContent="space-between">
                        <Link to="/forgot-password" >
                            忘记密码?
                        </Link>
                        <Link to="/sign-up" >
                            {"没有账号?注册"}
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
