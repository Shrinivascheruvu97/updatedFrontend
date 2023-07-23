// import React, {useState, useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios';

// export const MemberLogin = () => {

//     const [isLoggedIn1, setIsLoggedIn1] = useState(false);
//     const navigate = useNavigate();
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: ''
//     })

//     const handleInput = (event) => {setCredentials({...credentials, [event.target.name]:event.target.value})}

//     const handleClick = () => {navigate("/")}

//     function isEmailValid(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }

//     function isPasswordValid(password) {
//         const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         return passwordRegex.test(password);
//     };

//     const handleLogin = async (e) => {

//         e.preventDefault();

//         try{

//             if(isEmailValid(credentials.email))
//             {
//                 if(isPasswordValid(credentials.password))
//                 {
//                     const response = await axios.post('',JSON.stringify(credentials),
//                     {headers: {'Content-Type': 'application/json'}});

//                     const {userId, role} = response.data;
//                     const user = {userId, role};
//                     JSON.stringify(user);

//                     localStorage.setItem('userId',userId);
//                     localStorage.setItem('isLoggedIn1', 'true');
//                     setIsLoggedIn1(true);
//                     if(user.role === 'resident')
//                     {
//                         navigate('');
//                     }
//                     else if(user.role === 'committee_member')
//                     {
//                         navigate('/');
//                     }
//                     else{
//                         alert("Role is not specified!");
//                     }
//                 }
//             }
//         } catch(error){
//             console.error(error);
//             alert("Login Failed!")
//         }
//     }

//     return(
//         <div className='App2'>
//             <div className='auth-form-container'>
//                 <h2>Login Page</h2>
//                 <form className='login-form' onSubmit={handleLogin}>
//                     <label htmlFor='email'>email</label>
//                     <input onChange={handleInput} type='email' placeholder='Email' id='email' name='email' required/>
//                     <label htmlFor='password'>password</label>
//                     <input onChange={handleInput} type='password' placeholder='********' id='password' name='password' required/>
//                     <button type='submit'>Log In</button>
//                 </form>
//                 <button className='link-btn' onClick={handleClick}>Go back to main Page</button>
//             </div>

//         </div>
//     );
// }

import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const MemberLogin = () => {

    const [isLoggedIn1, setIsLoggedIn1] = useState(false);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleInput = (event) => {setCredentials({...credentials, [event.target.name]:event.target.value})}

    const handleClick = () => {navigate("/")}

    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isPasswordValid(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgotpasswordpage');
      };

    const handleLogin = async (e) => {

        e.preventDefault();

        try{

            if(isEmailValid(credentials.email))
            {
                // if(isPasswordValid(credentials.password))
                // {
                    const response = await axios.post(`http://localhost:9001/members/validatemember`,JSON.stringify(credentials),
                    {headers: {'Content-Type': 'application/json'}});
                    const {userId, role} = response.data;
                    const user = {userId, role};
                    JSON.stringify(user);

                    localStorage.setItem('userId',userId);
                    localStorage.setItem('isLoggedIn1', 'true');
                    setIsLoggedIn1(true);
                    if(user.role === 'resident')
                    {
                        navigate('/memberhomepage');
                    }
                    else if(user.role === 'committee_member')
                    {
                        navigate('/committeemember');
                    }
                    else{
                        alert("Role is not specified!");
                    }
                //}
                // else {
                //         alert("Password is not in format!");
                // }
            }else {
                    alert("Email is not in format!");
            }
        } catch(error){
            console.error(error);
            alert("Invalid Credentials!");
        }
    }

    return(
        <div class="wrapper">
            <div className='auth-form-container'>
                <h2>Member Login</h2><hr/>
                <form className='login-form' onSubmit={handleLogin}>
                    <label htmlFor='email'><b>Email</b></label>
                    <input onChange={handleInput} type='email' placeholder='Email' id='email' name='email' required/>
                    <label htmlFor='password'><b>Password</b></label>
                    <input onChange={handleInput} type='password' placeholder='********' id='password' name='password' required/>
                    <hr></hr>

                    <div class="forgot-pass">
                    <a onClick={handleForgotPasswordClick}>Forgot Password?</a>
                </div>
                    <button type='submit' className='btn btn-primary'>Log In</button>
                </form>
                <button className='link-btn' onClick={handleClick}>Go back to main Page</button>
            </div>

        </div>
    );
}