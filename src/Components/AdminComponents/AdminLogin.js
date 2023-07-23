import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLogin = () => {

    const [isLoggedIn2, setIsLoggedIn2] = useState(false);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''})

        

    const handleInput = (event) => {setCredentials({...credentials,[event.target.name]: event.target.value})}

    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
    }

    function isPasswordValid(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return passwordRegex.test(password);
    }

    const handleLogin = async (e) => {

        e.preventDefault();

        try{
            if(isEmailValid(credentials.email))
            {
                
                if(isPasswordValid(credentials.password))
                {
                    const response = await axios.post('http://localhost:9001/admin/validateadmin',JSON.stringify(credentials),
                    {headers: {'Content-Type': 'application/json'}});

                    const output = response.data;

                    localStorage.setItem('isLoggedIn2',true);
                    setIsLoggedIn2(true);
                    //alert(output);
                    navigate('/adminhomepage');
                }else{
                    alert("Password format is incorrect!");
                }
            }else{
                alert("Email is in Incorrect format!");
            }
        } catch(error){
            console.error(error);
            alert("Login Failed!")
        }
    };

    return(

        
        <div class="wrapper">
        <div className='auth-form-container'>
            <form className='Login-form' onSubmit={handleLogin} action="">
                <h2>Login</h2>
                <div class="input-group">
                    <input onChange={handleInput} type='email' placeholder='Email' id='email' name='email' required/>
                    <label for="email">Email</label>
                </div>
                <div class="input-group">
                    <input onChange={handleInput} type='password' placeholder='********' id='password' name='password' required/>
                    <label for="password">Password</label>
                </div>
                <div class="forgot-pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                
            </form>
        </div>
     </div>
    
        
    )
}