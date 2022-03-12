import React from 'react'

function ButtonWithProgress(props) {
    const { onClick, disabled, pendingApiCall, text, className } = props;
    return (
        <button
            className={className || "btn btn-primary"}
            onClick={onClick}
            disabled={disabled}>
            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{text}
        </button>
    )
}

export default ButtonWithProgress;