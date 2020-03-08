import React from "react";
import PropTypes from 'prop-types';

const Row = ({leftBar, rightBar}) => {
    return(
        <div className="person-block">
            {leftBar}
            {rightBar}
        </div>
    );
};

Row.propTypes = {
    leftBar: PropTypes.node.isRequired,
    rightBar: PropTypes.node.isRequired
};

export default Row;