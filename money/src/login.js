import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();

    const authorizaton = localStorage.getItem("user")
    useEffect(() => {
        if (authorizaton) {
            navigate('/HOmepage')
            
        }
        
    }
    )
    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')
    
    const Loginpage = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json();
        console.log(result)
        if (result.name) {
            console.log(result.name)
            alert("data found")
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/HOmepage');
            window.location.reload(false);
            

        }

    }
    return (

        <div class="login">
            <h1>LOGIN</h1>
            <input type="text" onChange={(e) => Setemail(e.target.value)} value={email} placeholder="enter  ur email" />
            <input type="text" onChange={(e) => Setpassword(e.target.value)} value={password} placeholder="enter Password" />
            <button onClick={Loginpage}>LOGIN</button>


        </div>



    )

}
export default Login;