import React from "react";
import { routeMain as routeProfile } from "../../pages/Profile/ProfileContainer";
import { InjectedFormProps, reduxForm } from "redux-form";
import { GetStringKeys, Input, createFild } from "../../components/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from '../../store/authReducer';
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../store/reduxStore";
import routeMain from "./routes";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <section>
            <form onSubmit={handleSubmit}>
                { createFild<LoginFormValuesTypeKeys>("Email", "email", [required], Input, {type: "E-mail"}) }
                { createFild<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"}) }
                { createFild<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "Remember me") }
                
                { captchaUrl && <img src={captchaUrl}/> }
                { captchaUrl && createFild<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {}) }
                
                { error && <div className={"formSummaryError"}>{error}</div>}
                <div className="wrapButton">
                    <button>Войти</button>
                </div>
            </form>
        </section>
    )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
    authorizedUserId: number | null
}
type MapDispatchPropsType = {
    login: (
        email: string, 
        password: string, 
        rememberMe: boolean, 
        captcha: string | any) => void
}
export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return <Navigate to={routeProfile()} />
    }
    return (
        <>
            <h1>Login</h1>
            <h6>Васька АВТОРИЗУЙСЯ <br/>или включи интернет {")) "}Олень</h6>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    )
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id
})
export {routeMain};
export default connect(mapStateToProps, {login})(Login);