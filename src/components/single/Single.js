import Sidebar from "../sidebar/Sidebar"
import SinglePost from "../singlepost/SinglePost"
import "./Single.css"

const Single = () => {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single
