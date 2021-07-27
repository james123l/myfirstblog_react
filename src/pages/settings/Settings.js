import Sidebar from "../../components/sidebar/Sidebar"
import "./Settings.css"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitles">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type ="text"/>
                    <label>Email</label>
                    <input type ="email"/>
                    <label>Password</label>
                    <input type ="password"/>
                    <button className="settingsSubmitButton">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
