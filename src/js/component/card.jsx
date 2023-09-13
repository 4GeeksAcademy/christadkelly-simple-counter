import React from "react";
import PropTypes from 'prop-types';

const MyCard = (prop) => {
    return (
        <div className="col d-flex align-items-stretch">
            <div className="card text-bg-dark border border-secondary flex-fill">
                <div className="card-body">
                    <h1 className="card-title"><strong>{prop.value}</strong></h1>
                </div>
            </div>
        </div>
    );
};

MyCard.propTypes = {
    value: PropTypes.number
}

export default MyCard