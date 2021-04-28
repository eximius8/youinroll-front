import React from 'react';
import { Tab, Grid, Container } from 'semantic-ui-react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  render() {
    const opts = {
      
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

const lessons = [0, 1,2,3,4,5,6]

function LatestLessons () {
  return (
    <Container fluid>
      <Grid columns={6} divided>               
          {lessons.map((lesson) => 
          <Grid.Column key={lesson}>        
            <Example />
          </Grid.Column>     
          )}          
      </Grid>
    </Container>
  )
}


const panes = [
    {
      menuItem: 'Главная',
      render: () => <Tab.Pane attached={false}>
        <LatestLessons />
      </Tab.Pane>,
    },
    {
      menuItem: 'Описание',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Видео',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    ,
    {
      menuItem: 'Изображения',
      render: () => <Tab.Pane attached={false}>Изображения</Tab.Pane>,
    },
    ,
    {
      menuItem: 'Расписание',
      render: () => <Tab.Pane attached={false}>Расписание</Tab.Pane>,
    },
  ]
  
export default function TabExampleSecondaryPointing () {
    return(
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    )
}