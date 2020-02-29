import React from "react";
import './error-indicator.css'

const ErrorIndicator = () => {
    return(
        <div className="error">
            <span className="error-header">Ooopss...</span>
            <span className="error-text">Something went wrong, but it's okay...Maybe...</span>
        </div>
    )
};

export default ErrorIndicator;