import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Search = ({searchUsers,showClear,clearUser,setAlert}) => {
    const [text,setText] = useState('');

    
   const onSubmit = e =>
    {   
        e.preventDefault();
        if (text ==='')
        {
            setAlert("Please enter Something","light");
        }
        else{
            searchUsers(text);
            setText('');
        }
       
    };
    const onChange = e =>
   
        setText(e.target.value);
    
    

        return(
            <div>
                <form onSubmit={onSubmit} className= 'form' >
                    <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
                    <input type= 'submit' value='Search' className= "btn btn-dark btn-block" />
                </form>
                {showClear && (
                <button className=' btn-block btn-light' onClick={clearUser}>Clear</button>)}
            </div>
        )
    
    
} 

Search.propTypes = {
    searchUsers:PropTypes.func.isRequired,
    clearUser:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired

};
export default Search