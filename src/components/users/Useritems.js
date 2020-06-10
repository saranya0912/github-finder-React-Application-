import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Useritems = ({user:{login,avatar_url,html_url}})  => {
    

   
        
        return(
            <div className= 'card text-center'>
                <img src = {avatar_url} alt='' className='round-img' style = {{width:'50px'}}/>
                <h2>{login} </h2>
<div>
                <Link to= {`/user/${login}`} className='btn btn-dark btn-sm '>More</Link>

            </div>
            </div>
        );
    
};
Useritems.propTypes={
user:PropTypes.object.isRequired
};
export default Useritems;