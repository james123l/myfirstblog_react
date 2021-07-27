import './Write.css'
import {useContext, useState} from "react";
import axios from "axios";
import {Context} from "../../context/Context";

const Write = () => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const {user} = useContext(Context);
    const submitHandler =async (e)=>{
        e.preventDefault();
        const newPost={
            username:user.username,
            title,
            desc,
        }
        if(file){
            const data = new FormData();
            const filename = Date.now()+file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try{
                await  axios.post("/upload",data);
            }catch(e){

            }
        }
        try{
            const res = await axios.post("/posts",newPost);
            window.location.replace("/post/"+res.data._id);
        }catch(e){

        }
    }

    return (
        <div className="write">
            {file && <img className="writeImg" src={URL.createObjectURL(file)} alt=""/>}
            <form action="" className="writeForm" onSubmit={submitHandler}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input onChange={e=>setFile(e.target.files[0])} type="file" id="fileInput" style={{display:"none"}}/>
                    <input onChange={e=>setTitle(e.target.value)} className="writeInputTitle" autoFocus={true} type="text" placeholder="Title"/>
                </div>
                <div className="writeFormGroup">
                    <textarea onChange={e=>setDesc(e.target.value)}  placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
