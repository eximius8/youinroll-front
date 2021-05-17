import React, { useContext} from 'react';
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
import { UserContext } from "./contexts/UserContext";



function App() {

  const { user } = useContext(UserContext);
 

  if (!user){
    return(
      <LoginForm />
    )
  }
  
  
  return (    
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
  )    
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
export {UserContext}