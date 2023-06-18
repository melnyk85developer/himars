import React from "react";
import { GetStringKeys, Input, createFild } from "components/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "utils/validators/validators";
import { PostType } from "types/types";
import "./styles.scss";

export type AddPostFormValuesType = {
    newPostText: string
}
type PropsType = {}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType > = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="wrapMyPost">
            {createFild<AddPostFormValuesTypeKeys>("Что у Вас нового?", "newPostText", [required], Input) }
            <button className="buttonMyPost">Публиковать</button>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm);