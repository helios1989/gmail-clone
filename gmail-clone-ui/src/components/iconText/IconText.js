import React from 'react';
import './IconText.css';
function IconText({text1, text2, icon}) {
    return (
        <div>
            <div className="icon-text">
                {icon}
                <span className="text">{text1}</span>
                <span className="highlight">{text2}</span>
            </div>
        </div>
    );
}

export default IconText;