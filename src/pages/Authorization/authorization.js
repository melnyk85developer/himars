import React from "react";
import { routeMain as routeProfile } from "pages/Profile";
import { reduxForm } from "redux-form";
import { Input, createFild } from "components/FormsControls/FormsControls";
import { required } from "utils/validators/validators";
import { connect } from "react-redux";
import { login } from '../../store/authReducer';
import { Navigate } from "react-router-dom";
import routeMain from "./routes";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <section>
            <form onSubmit={handleSubmit}>
                { createFild("Email", "email", [required], Input, {type: "E-mail"}) }
                { createFild("Password", "password", [required], Input, {type: "password"}) }
                { createFild(null, "remembrMe", [], Input, {type: "checkbox"}, "Remember me") }
                
                { captchaUrl && <img src={captchaUrl}/> }
                { captchaUrl && createFild("Symbols from image", "captcha", [required], Input, {}) }
                
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return <Navigate to={routeProfile(props.authorizedUserId)} />
    }
    return (
        <>
            <h1>Login</h1>
            <h6>Васька АВТОРИЗУЙСЯ <br/>или включи интернет {")) "}Олень</h6>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.getCaptchaUrl}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    getCaptchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id
})
export {routeMain};
export default connect(mapStateToProps, {login})(Authorization);