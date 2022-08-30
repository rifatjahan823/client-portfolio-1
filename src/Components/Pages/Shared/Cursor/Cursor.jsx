import React from 'react';
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
    return (
        <div>
            <AnimatedCursor
                color=" 32, 201, 151"
                innerSize={10}
                outerSize={35}
                innerScale={1}
                outerScale={1.3}
                outerAlpha={0.3}
                outerStyle={{
                    zIndex: '9999',
                    border: "1px solid white"
                }}
            />
        </div>
    );
};

export default Cursor;