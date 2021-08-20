import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '800px', border: '3px solid navy'}} >
            {props.children};
        </div>
    );
};

export default Scroll;

