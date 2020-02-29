import React from "react";

const Row = ({leftBar, rightBar}) => {
    return(
        <div className="person-block">
            {leftBar}
            {rightBar}
        </div>
    );
};

export default Row;