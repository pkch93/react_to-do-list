import React from "react";
import "../asset/Form.scss";

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
    return(
        <div className="form">
            <input
                value={value}
                onChange={onChange} 
                onKeyPress={onKeyPress}
                style={{color}}
            />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;