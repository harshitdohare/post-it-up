 
 import React, { useState, useEffect, useContext } from 'react';
 import { TextField, Box, Button, Typography, styled } from '@mui/material';
// import { Component } from 'react';

 const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

//  const Component = styled(Box)`
//  width: 400px;
//  position: absolute;
//  top: 50%;
//  left: 50%;
//  transform: translate(-50%, -50%);
//  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
//  background-color: #FDF0D5;
// `;

const Component = styled(Box)`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;  // Makes the borders curved
  background-color: #FDF0D5;
`;


const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

 const Login = () => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [account, toggleAccount] = useState('login');

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    return (
        <Component>
        <Box>
            <Image src={imageURL} alt="blog" />
            {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />


                            <LoginButton variant="contained">Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <SignupButton >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }

        </Box>

        <Box 
            sx={{
                py: 2, 
                textAlign: 'center',
                color: 'blue'
            }}
        >

            <Typography variant="body2">
                © 2024 PostItUp. All Rights Reserved.
            </Typography>
        </Box>
        
        </Component>
        
    )
 }

 export default Login;

// import React, { useState } from 'react';
// import { 
//   Container, 
//   TextField, 
//   Button, 
//   Box, 
//   Typography, 
//   Paper
// } from '@mui/material';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Login attempted with:', username);
//   };

//   const handleCreateAccount = () => {
//     console.log('Create account clicked');
//   };

//   return (
//     <Box 
//       sx={{
//         height: '100vh', 
//         display: 'flex', 
//         flexDirection: 'column', 
//         background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
//       }}
//     >
//       <Container maxWidth="xs" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
//         <Paper 
//           elevation={10} 
//           sx={{ 
//             borderRadius: 4, 
//             padding: 4, 
//             width: '100%',
//             background: 'rgba(255,255,255,0.9)',
//             boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
//           }}
//         >
//           <Typography 
//             component="h1" 
//             variant="h4" 
//             sx={{ 
//               textAlign: 'center', 
//               mb: 3, 
//               color: '#2575fc', 
//               fontWeight: 'bold' 
//             }}
//           >
//             Post It Up 
//           </Typography>
//           <Box component="form">
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoComplete="username"
//               autoFocus
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: 3,
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#6a11cb',
//                   },
//                 },
//               }}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: 3,
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#6a11cb',
//                   },
//                 },
//               }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 2,
//                 mb: 2,
//                 borderRadius: 3,
//                 background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
//                 '&:hover': {
//                   background: 'linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)',
//                 },
//                 py: 1.5
//               }}
//               onClick={handleLogin}
//             >
//               Login
//             </Button>
//             <Button
//               fullWidth
//               variant="outlined"
//               sx={{
//                 borderRadius: 3,
//                 borderColor: '#6a11cb',
//                 color: '#6a11cb',
//                 '&:hover': {
//                   borderColor: '#2575fc',
//                   color: '#2575fc',
//                 },
//                 py: 1.5
//               }}
//               onClick={handleCreateAccount}
//             >
//               Create New Account
//             </Button>
//           </Box>
//         </Paper>
//       </Container>

//       <Box 
//         sx={{
//           backgroundColor: 'rgba(255,255,255,0.2)', 
//           py: 2, 
//           textAlign: 'center',
//           color: 'white'
//         }}
//       >
//         <Typography variant="body2">
//           © 2024 PostItUp. All Rights Reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Login;