import React from "react";
import {Field, reduxForm } from "redux-form";
import { Textarea } from "components/FormsControls/FormsControls";
import { maxLengthCreator, required } from "utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <div className="textareaMessages">
            <form onSubmit={props.handleSubmit}  >
                <Field  component={Textarea} 
                        validate={[required, maxLength50]}
                        name="newMessageBody" 
                        placeholder="Написать сообщение" 
                        className="inputMessage"/>
                <button className="buttonMessage">Отправить</button>
            </form>
        </div>
    )
}
export default reduxForm({form: "MessagesAddMessageForm"})(AddMessageForm)