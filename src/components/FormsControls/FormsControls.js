import React from "react"
import { Field } from "redux-form";
import "./styles.scss";

const FormControl = ({input, meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div>
            <div className={hasError ? "errorTextarea" : " "}>{children}</div>
            { hasError && <span className={hasError ? "errorSpan" : " "}>{error}</span> }
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, ...restprops} = props;
    return  <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restprops} = props;
    return <FormControl {...props}><input {...input} {...restprops} /></FormControl>        
}
export const createFild = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field  
            placeholder={ placeholder }
            name={ name } 
            validate={ validators } 
            component={ component }
            { ...props }
        />{ text }
    </div>
)
