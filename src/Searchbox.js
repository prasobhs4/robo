import React from 'react';

const Searchbox = ({searchChange}) => {
 
    return (
       <input className='pa3 ba b--green bg-lightest-blue' 
       onChange={searchChange}
       type='search' placeholder='Search here' />
    )

}

export default Searchbox;