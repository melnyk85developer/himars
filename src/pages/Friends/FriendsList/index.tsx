import React from "react";
import FriendsItem from "../FriendsItem";
import LSidebar from "../../../components/LSidebar";
// import WidgetYofamiliar from "components/Widgets/WidgetYofamiliar";
// import WidgetPeople from "components/Widgets/WidgetsPeople";
import RSidebar from "../../../components/RSidebar";
import { UserType } from "../../../types/types";
import "./styles.scss";

type PropsType = {
    friends: Array<UserType>

}

const FriendsList: React.FC<PropsType> = (props) => {
    return (
        <>
            <section className="wrapFriends">
                <LSidebar 
                    content={
                        <>
                            {/* <WidgetYofamiliar />
                            <div className="wrapFriendsWidgetPeople">
                                <WidgetPeople />
                            </div> */}
                        </>
                    }
                />
                    <div className="contentFriends">
                        <div className="friendsList">
                            <h3> This is Friends</h3>
                        </div>
                        <div className="wrapFriendsList">
                            {props.friends.map( item => (
                                <FriendsItem key={item.id} friends={item}/>
                            ))}
                        </div> 
                    </div>
                <RSidebar content={undefined} />
            </section>
        </>
    )
}
export default FriendsList;