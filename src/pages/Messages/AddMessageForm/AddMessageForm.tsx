import React from "react";
import {Field, InjectedFormProps, reduxForm } from "redux-form";
import { createFild } from "../../../components/FormsControls/FormsControls"
import { Textarea } from "components/FormsControls/FormsControls";
import { maxLengthCreator, required } from "utils/validators/validators";
import { NewMessageFormValuesType } from "..";

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
 = (props) => {
    return (
        <div className="textareaMessages">
            <form onSubmit={props.handleSubmit}  >
                { createFild<NewMessageFormValuesKeysType>(
                    "Написать сообщение",
                    'newMessageBody', 
                    [required, maxLength50], 
                    Textarea) 
                }
                <button className="buttonMessage">Отправить</button>
            </form>
        </div>
    )
}
export default reduxForm<NewMessageFormValuesType, PropsType>({form: "MessagesAddMessageForm"})(AddMessageForm)