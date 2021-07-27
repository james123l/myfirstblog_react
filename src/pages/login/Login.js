import { Link } from "react-router-dom";
import "./Login.css";
import {useContext, useRef} from "react";
import {Context} from "../../context/Context";
import axios from "axios"


export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch,isFetching } = useContext(Context);

    const submitHandler = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            window.location.replace("/");
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    };

    return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={submitHandler}>
            <label>Email</label>
            <input className="loginInput" type="text" ref={userRef} placeholder="Enter your email..." />
            <label>Password</label>
            <input className="loginInput" type="password" ref={passwordRef}  placeholder="Enter your password..." />
            <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            <Link className='link' to="/register">
                <button className="loginRegisterButton">Register</button>
            </Link>
        </form>
    </div>
    );
}
