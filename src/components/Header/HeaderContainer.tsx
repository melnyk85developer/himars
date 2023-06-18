import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'store/authReducer';
import Header, { DispatchPropsType, MapPropsType } from './Header';
import { AppStateType } from 'store/reduxStore';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render(){
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
});
export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
    mapStateToProps, 
    {logout})
    (HeaderContainer);