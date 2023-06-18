import React, { ReactNode } from "react"
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../utils/validators/validators";
import "./styles.scss";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: ReactNode
}
const FormControl: React.FC<FormControlPropsType> = ({meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div>
            <div className={hasError ? "errorTextarea" : " "}>{children}</div>
            { hasError && <span className={hasError ? "errorSpan" : " "}>{error}</span> }
        </div>
    )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    // const {input, meta, child, ...restProps} = props;
    return  <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>        
}
export function createFild<FormKeysType extends string>(
                placeholder: string | undefined, 
                name: FormKeysType, 
                validators: Array<FieldValidatorType>, 
                component: React.FC<WrappedFieldProps>, 
                props = {}, text = ""){
    return (
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
}

export type GetStringKeys<T> = Extract<keyof T, string>
