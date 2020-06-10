import React , {useState, Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Userinfo from './components/users/Userinfo';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import Notfound from './components/Pages/Notfound';


const App = () =>{ 
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const [repos,setRepos] = useState([]);
  const[loading,setLoading] = useState(false);
  const[alert,settingAlert]= useState(null);

  let githubClientId;
  let githubClientSecret;

  if(process.env.NODE_ENV !== 'production'){
    githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  }
  else{
    githubClientId=process.env.GITHUB_CLIENT_ID;
    githubClientSecret=process.env.GITHUB_CLIENT_SECRET;
  }
  
  //searching users
 const searchUsers = async text =>
  {    
    setLoading(true);
    //console.log(text);
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setUsers(res.data.items);
    setLoading(false);
  };
  //get single user information
  const getUser = async username =>
   {
    setLoading(true);
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    //console.log(username);
    setUser(res.data);
    setLoading(false);
  };

  //get user repository 
  const getUserRepos = async username =>
  {   
    setLoading(true);
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setRepos(res.data);
    setLoading(false);
   //console.log(this.user)
   // console.log(this.repos);
  };

  //clearing user
  const clearUser = () =>
   {
    setUsers([]);
    setLoading(false);
  }

  //setting alert message when text is empty
  const setAlert = (msg,type) =>
  {
    settingAlert({msg,type}); 
    setTimeout(() => {settingAlert(null)}, 3000); 
  };


  
    return (
      <Router>
      <div className='App' >
      < Navbar titleofapp = "Github Finder" iconname= "fab fa-github"/>

      <div className='container'>
      <Alert alert= {alert}/>
      <Switch>
      <Route exact path='/' render = { props => (  
      <Fragment>
      <Search searchUsers={searchUsers} clearUser={clearUser} showClear={users.length > 0? true : false} setAlert={setAlert}/>
      <Users   users={users} loading= {loading}/>
      </Fragment>
        )}
        />
        <Route exact path ='/About' component={About}/>
        <Route exact path='/user/:login' render={props => (<Userinfo {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading}/>)}/>
        <Route component={Notfound}/>
        </Switch>
      </div>

      </div>
      </Router>
    );
  
  
}

export default App;
