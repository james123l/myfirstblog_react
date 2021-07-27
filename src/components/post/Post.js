import './Post.css'
import {Link} from "react-router-dom"

const Post = ({post}) => {
    const PF = "localhost:5000/images/"
    return (
        <div className='post'>

            <div className="postInfo">
                <div className="postCats">
                    { post.categories.map((c)=>(
                        // key={c} 防止console报错
                        //映射多组标签的时候 需要加入属性key
                        <span key={c} className="postCats">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString} </span>

            </div>
            {post.photo &&(
                <img className="postImg"  alt=""
                     src={PF + post.photo}/>
            )}
            <p className="description">
                {post.desc}
            </p>
        </div>
    )
}

export default Post
