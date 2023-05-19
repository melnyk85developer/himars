import React from 'react';
import "./styles.scss";

const LSidebar = (props) => {
    return (
        <>
            <div className="LshadowSidebar">
                <aside className="L_wrapper_Sidebar">
                    {props.content}
                </aside>
            </div>
        </>
    )
}

export default LSidebar;