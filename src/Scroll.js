import React from 'react';

const Scroll = (props) => {
   return (
    <div style={{overflowY:'auto',border:'150px',height:'500px'}}>
    {props.children}
    </div>
   )

}

export default Scroll;