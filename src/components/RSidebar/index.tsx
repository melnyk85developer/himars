import React, { ReactNode } from 'react';
import "./styles.scss"

type PropsType = {
    content: ReactNode
}

const RSidebar: React.FC<PropsType> = (props) => {
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