import React, {Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';

const Userinfo = ({user,loading,getUser,getUserRepos,repos,match}) =>{
 useEffect( () =>
 {
    getUser(match.params.login);
    getUserRepos(match.params.login);
// eslint-disable-next-line
 },[]);
    
  

     
         const {name,avatar_url,html_url,following,company,followers,hireable,location,bio,blog,login,public_repos,public_gists}= user;
        console.log(repos);
        if(loading )return <Spinner/>;
         
        return(
        <Fragment>
            <Link to = '/' className='btn btn-light'> Back to Search Page</Link>
            Hireable:{''} 
        {hireable ? (<i className= 'fas fa-check text-success'/>):(<i className= 'fas fa-times-circle text-danger'/>)}
            <div className='card grid-1 userinfo'>
            <div className='all-center' >
                <img src = {avatar_url} className='round-img'alt='' style={{width:'150px'}}/>
                <h1>{name}</h1>
                <p>Location:{location}</p>
            </div>
            <div className='all-center' >
                {bio && <Fragment>
                   <h1>Bio</h1> 
                   <p>{bio}</p>
                   </Fragment>}
                   <a href={html_url} className='btn btn-dark my-1'>View Github Profile</a>
                   <ul>
                       <li>
                            <strong>Username:</strong> {login}
                       </li>
                       <li>
                {company&& <strong>Company:</strong>} {company}
                       </li>
                       <li>
                {blog&& <strong>Website/Blog:</strong>} {blog}
                       </li>
                   </ul>
            </div>
            </div>
            <div className='card text-center '>
                <div className='badge badge-primary '>Followers:{followers}</div>
                <div className='badge badge-success'>Following:{following}</div>
                <div className='badge badge-danger'>Public_repos:{public_repos}</div>
                <div className='badge badge-dark'>Public_gists:{public_gists}</div>

            </div>
            <Repos repos={repos}/>
        </Fragment>
        );     
     
}
Userinfo.propTypes = {
    loading:PropTypes.bool,
    user:PropTypes.object.isRequired,
    getUser:PropTypes.func.isRequired,
    getUserRepos:PropTypes.func.isRequired,
    repos:PropTypes.array.isRequired
};
export default Userinfo;