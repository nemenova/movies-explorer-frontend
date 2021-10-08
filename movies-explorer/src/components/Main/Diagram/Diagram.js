import React from 'react';

function Diagram() {

    return (
        <div className="diagram">
            <div className="diagram__backend-container">
                <div className="diagram__backend">
                    <p className="diagram__text diagram__text_black">1 неделя</p>
                </div>
                <span className="diagram__capture">Back-end</span>
            </div>
            <div className="diagram__frontend-container">
                <div className="diagram__frontend">
                    <p className="diagram__text diagram__text_white">4 недели</p>
                </div>
                <span className="diagram__capture">Front-end</span>
            </div>
        </div>
    )
}

export default Diagram;