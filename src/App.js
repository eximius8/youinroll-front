import React, {Component} from 'react';
import Home from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch, withRouter} from 'react-router-dom';
import Watch from './containers/Watch/Watch';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';
import Trending from './containers/Trending/Trending';
import Search from './containers/Search/Search';
import Categories from './containers/Categories/Categories';
import Channels from './containers/Channels/Channels';

import {SideBar} from './containers/SideBar/SideBar';

const API_KEY = process.env.REACT_APP_YT_API_KEY;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <SideBar />
        <Switch>
          <Route path="/feed/trending" component={Trending}/>
          <Route path="/results" render={() => <Search key={this.props.location.key}/>}/>
          <Route path="/watch" render={() => <Watch key={this.props.location.key}/>}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/сhannels" component={Channels}/>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    );
  }
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));