import React from "react";
import './error-indicator.css'

const ErrorIndicator = () => {
    return(
        <div className="error">
            <h4 className="error-header">Ooopss...</h4>
            <span className="error-text">Something went wrong, but it's okay...Maybe...</span>
        </div>
    )
};

export default ErrorIndicator;