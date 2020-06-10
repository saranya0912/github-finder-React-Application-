import React from 'react';
import Useritems from './Useritems'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {
    
   
       const mystyle ={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'1rem'

        };
        if(loading){
           return <Spinner/>
        }
        else{
            return(
                <div style={mystyle}>
                    {users.map(user =>(
                <Useritems key={user.id} user={user}/>))}
               </div> 
            );
        }
        
    
    
}
Users.propTypes = {
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired

};

export default Users;