import "./Topbar.css"
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import {useContext} from "react";
import {Context} from "../../context/Context";

const Topbar =  () => {
    const {user,dispatch} = useContext(Context);

    const logoutHandler = (e)=>{
        e.preventDefault();
        dispatch({type:"LOGOUT"});
    }

    return (
        <div className="topbar">
            <div className='back'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link className="link" to="/">
                        <li className="topListItem">Home</li>
                    </Link>
                    <Link className="link" to="/">
                        <li className="topListItem">About</li>
                    </Link>
                    <Link className="link"  to="/">
                        <li className="topListItem">Contact</li>
                    </Link>
                    <Link className="link" to="/write">
                        <li className="topListItem">Write</li>
                    </Link>
                    <Link className="link" to="/">
                        {user && <li className="topListItem" onClick={logoutHandler}>LOGOUT</li>}
                    </Link>

                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img className="topImg"
                            src={user.profilePic?user.profilePic:"https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX460_.png"}  alt=""/>
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                    )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
            </div>
        </div>
    )
}

export default Topbar
