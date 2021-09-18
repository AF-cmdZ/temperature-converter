import React, { handler } from "react";
import PropTypes from "prop-types";

function Input({ handler, id }) {
    return (
        <div>
            <label htmlFor={id}>°{id}</label>
                <input type="number" id={id} onChange={handler}/> 
        </div>
    )
}

Input.propTypes = {
    handler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default Input;

