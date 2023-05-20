import React from 'react';
import "./styles.scss"

const RSidebar = (props) => {
    return (
        <>
            <div className="RshadowSidebar">
                <aside className="R_wrapper_Sidebar">
                    {props.content}
                </aside>
            </div>
        </>
    )
}

export default RSidebar;