import React from 'react';
import { ReactNode } from 'react';
import "./styles.scss";

type PropsType = {
    content: ReactNode
}

const LSidebar: React.FC<PropsType> = (props) => {
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