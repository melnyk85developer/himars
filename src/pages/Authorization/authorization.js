import React from "react";
import { routeMain as routeProfile } from "pages/Profile";
import { reduxForm } from "redux-form";
import { Input, createFild } from "components/FormsControls/FormsControls";
import { required } from "utils/validators/validators";
import { connect } from "react-redux";
import { login } from '../../store/authReducer';
import { Navigate } from "react-router-dom";
import routeMain from "./routes";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <section>
            <form onSubmit={handleSubmit}>
                { createFild("Email", "email", [required], Input, {type: "E-mail"}) }
                { createFild("Password", "password", [required], Input, {type: "password"}) }
                { createFild(null, "remembrMe", [], Input, {type: "checkbox"}, "Remember me") }
                { error && <div className={"formSummaryError"}>{error}</div>}
                <div className="wrapButton">
                    <button>Войти</button>
                </div>
            </form>
        </section>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Authorization = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={routeProfile()} />
    }
    return (
        <>
            <h1>Login</h1>
            <h6>Васька АВТОРИЗУЙСЯ <br/>или включи интернет {")) "}Олень</h6>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export {routeMain};
export default connect(mapStateToProps, {login})(Authorization);