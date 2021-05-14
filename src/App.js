import React, {useEffect, useState} from 'react';
import Home from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch, withRouter} from 'react-router-dom';
// import Watch from './containers/Watch/Watch';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';
//import Trending from './containers/Trending/Trending';
// import Search from './containers/Search/Search';
import Categories from './containers/Categories/Categories';
import Channels from './containers/Channels/Channels';
import Stream from "./containers/StreamPage/StreamPage";
import LoginForm from "./containers/LoginForm/LoginForm"

const UserContext = React.createContext({user: {}})

function App() {

  const [ user, setUser ] = useState(localStorage.getItem('loggeduser') || "");
  
  useEffect(() => {
    localStorage.setItem('loggeduser', user);
    
  }, [user])
 

  if (!user){
    return(
      <LoginForm setUser={setUser} />
    )
  }
  
  
    return (
    <UserContext.Provider user={user}>
      <AppLayout>        
        <Switch>
          <Route path="/feed/trending" component={Stream}/>
         {/*  <Route path="/results" render={() => <Search key={this.props.location.key}/>}/>
          <Route path="/watch" render={() => <Watch key={this.props.location.key}/>}/> */}
          <Route path="/categories" component={Categories}/>
          <Route path="/сhannels" component={Channels}/>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    </UserContext.Provider>
    )    
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
export {UserContext}