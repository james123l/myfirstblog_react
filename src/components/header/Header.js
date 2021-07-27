import "./Header.css"
import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">My Blog</span>
                <span className="headerTitleSm">Recording my life</span>
            </div>
            <img alt="" className="headerImg" />
        </div>
    )
}

export default Header
