import { Link } from "react-router-dom"
import {useContext, useState} from "react"
import axios from "axios"
import "./Register.css"
import {Context} from "../../context/Context";

export default function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const {dispatch,isFetching } = useContext(Context);

    const submitHandeler =async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/auth/register",{
                username, 
                email, 
                password
            });
            //如果注册成功跳转到首页
            res.data&& dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            window.location.replace("/");
        }catch(e){
            // 如果没注册成功 则会设置error
            setError(true);
        }
    }

    return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={submitHandeler}>
            <label>Username</label>
            <input onChange={
                e =>{ setUsername(e.target.value)}
            } className="registerInput" type="text" placeholder="Enter your username..."/>
            <label>Email</label>
            <input onChange={
                e =>{ setEmail(e.target.value)}
            }  className="registerInput" type="text" placeholder="Enter your email..."/>
            <label>Password</label>
            <input onChange={
                e =>{ setPassword(e.target.value)}
            }  className="registerInput" type="password" placeholder="Enter your password..."/>
            <button className="registerButton" type="submit">Register</button>
            <Link className='link' to="/login">
                <button className="registerLoginButton">Login</button>
            </Link>
            <span style={{visibility:`${error?"visible":"hidden"}`}} className="info">Something went wrong.</span>
        </form>
    </div>
    );
}
