import { useState,useEffect} from "react"
import axios from "axios"
import "./Home.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import Single from "../../components/single/Single"
import { useLocation } from "react-router"

const Home = () => {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    //每次开启react时
    // 在package.json中增加代理"proxy":"http://localhost:5000/api/"
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts"+search);
            setPosts(res.data);
        }
        fetchPosts();
    },[search])
    return (
        <div>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </div>
    )
}

export default Home
