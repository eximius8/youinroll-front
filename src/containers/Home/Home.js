import React from 'react';
import { Container,  Image, Button } from 'semantic-ui-react';
//import {connect} from "react-redux";
//import * as videoActions from "../../store/actions/video";
import './Home.scss';
// import {SideBar} from '../SideBar/SideBar';
//import HomeContent from './HomeContent/HomeContent';
//import {bindActionCreators} from 'redux';
//import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
//import {getVideoCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded} from '../../store/reducers/videos';

import TabExampleSecondaryPointing from "../../components/ChannelTabs/CHannelTabs";


export default function Home(){

  return(
    <div className="home">
      <div className="mainImg">
        <Image 
          src='https://youinroll.com/storage/uploads/98ccb39ea4855732d019c98aa8f54a62-1.jpg' 
          fluid 
        />
      </div>
      <Container as="div" fluid >
        <div className="channel-info">        
          <div className="avatarblock">
            <Image 
                  src='https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130' 
                  size='tiny' 
                  circular 
                  inline
              />  
          </div>
          <div className="descriptionblock">          
            <h2>Никита Вадимович</h2>
            <span className="aboutprofile">
              <strong className="bigger">58</strong> Отслеживают {' '}
            </span>
            <span className="aboutprofile">
              <strong className="bigger">672</strong> Видео
            </span>
          </div>
          <div className="buttonblock">
            <Button
              color='red'
              content='Подписаться'
              label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
              />              
            
            <Button icon='like' />
            <Button icon='bell' />
            <Button icon='ellipsis vertical' />
          </div>
        </div>
        <div className="tabmenu">
          <TabExampleSecondaryPointing />

        </div>
      </Container>
      
      <Container>
       
        
      </Container>
    </div>    
  )
}

/* class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  render() {
    return (
      <div className="home">

        <h1>Мой канал</h1>
       
       <HomeContent
          bottomReachedCallback={this.bottomReachedCallback}
          showLoader={this.shouldShowLoader()}/> 
      </div>
    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      this.fetchVideosByCategory();
    }
  }

  fetchVideosByCategory() {
    const categoryStartIndex = this.state.categoryIndex;
    const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
    this.props.fetchMostPopularVideosByCategory(categories);
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3,
      };
    });
  }

  fetchCategoriesAndMostPopularVideos() {
    this.props.fetchMostPopularVideos();
    this.props.fetchVideoCategories();
  }

  bottomReachedCallback = () => {
    if (!this.props.videoCategoriesLoaded) {
      return;
    }
    this.fetchVideosByCategory();
  };

  shouldShowLoader() {
    if (this.props.videoCategoriesLoaded && this.props.videosByCategoryLoaded) {
      return this.state.categoryIndex < this.props.videoCategories.length;
    }
    return false;
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state),
    videoCategoriesLoaded: videoCategoriesLoaded(state),
    videosByCategoryLoaded: videosByCategoryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request;
  return bindActionCreators({fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosByCategory}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); */