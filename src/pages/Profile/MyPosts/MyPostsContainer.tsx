import { connect } from 'react-redux';
import { actions } from "store/profileReducer";
import MyPosts, { DispatchPropsType, MapPropsType } from './MyPost';
import { AppStateType } from 'store/reduxStore';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}
const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);
export default MyPostsContainer;