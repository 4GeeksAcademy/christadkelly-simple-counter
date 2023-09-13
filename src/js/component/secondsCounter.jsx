import React from "react";
import MyCard from "./card";
import MySpecialCard from "./specialCard";
import PropTypes from 'prop-types';

const SecondsCounter = (prop) => {
    return (
        <div className="container bg-dark p-5 mt-2">
            <div className="row text-center">
                <MySpecialCard />
                <MyCard value={prop.Value6}/>
                <MyCard value={prop.Value5}/>
                <MyCard value={prop.Value4}/>
                <MyCard value={prop.Value3}/>
                <MyCard value={prop.Value2}/>
                <MyCard value={prop.Value1}/>
            </div>
        </div>
    );
};

MyCard.propTypes = {
    Value1: PropTypes.number,
    Value2: PropTypes.number,
    Value3: PropTypes.number,
    Value4: PropTypes.number,
    Value5: PropTypes.number,
    Value6: PropTypes.number
}

export default SecondsCounter