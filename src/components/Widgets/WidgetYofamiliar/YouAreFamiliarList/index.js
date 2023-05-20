import React from "react";
import YouAreFamiliarItem from "../YouAreFamiliarItem";

const YouAreFamiliarList = (props) => {
    return (
        <>
            {props.youAreFamiliar.map( item => (
                <YouAreFamiliarItem key={item.id} friends={item}/>
            ))}
        </>
    )
}
export default YouAreFamiliarList;