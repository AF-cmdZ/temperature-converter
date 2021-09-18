import React from "react";
import PropTypes from "prop-types";

function Input({ conversion, handler, id, temp }) {
    return (
        <div>
            <label htmlFor={id}>°{id}</label>
                <input type="number" id={id} onChange={handler}
                    data-conversion={conversion}
                    value={temp}
                /> 
        </div>
    )
}

Input.propTypes = {
    handler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    conversion: PropTypes.string.isRequired,
    temp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Input;

