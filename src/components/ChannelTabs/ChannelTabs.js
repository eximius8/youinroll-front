import React from 'react';
import { Image, Tab, Grid, Container, Card, Feed, Divider, Label, Icon, Button } from 'semantic-ui-react';
// import YouTube from 'react-youtube';

import "./ChannelTabs.scss";


import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
//https://github.com/namespace-ee/react-calendar-timeline#usage

//import "~react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1020/1000/600/',
    thumbnail: 'https://picsum.photos/id/1020/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1016/1000/600/',
    thumbnail: 'https://picsum.photos/id/1016/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1023/1000/600/',
    thumbnail: 'https://picsum.photos/id/1023/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1021/1000/600/',
    thumbnail: 'https://picsum.photos/id/1021/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1022/1000/600/',
    thumbnail: 'https://picsum.photos/id/1022/250/150/',
  },
];


const groups = [{ id: 1, title: 'Python новичкам' }, { id: 2, title: 'JavaScript профи' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'Практика',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'Теория',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'Практика',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]


function TimeTable(){

  return(
    <div>
      Расписание Никиты Вадимовича
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
      />
  </div>
  )
};


function ChannelDescription(){

  return(
    <>
      <h3>Основатель проекта</h3>
      <Image
        rounded
        fluid        
        src="https://youinroll.com/storage/uploads/72c8d58e186d88bd2258ec6b1e132cba-1.jpg" 
      />
      <Container fluid >
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <div className="description">
                <h2>Описание</h2>
                <p>Инженер — Программист занимаюсь созданием сообщества
                Образовательного видеохостинга - YouinRoll</p>                
                <p>Все интересующие вас вопросы можно задать мне в сообщениях прямо на моем канале или комментариях.</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="description">
                <h2>Связаться</h2>
                <div>
                  <Button>
                    Задать вопрос
                  </Button>
                  <Button>
                    Открыть чат
                  </Button>
                </div>
                <div>
                  <Icon 
                    name="facebook"
                    size="large"                  
                  />
                  <a href="https://google.com">
                    Никита Вадимович
                  </a>
                </div>
                <div>
                  <Icon 
                    name="vk"
                    size="large"                  
                  />
                  <a href="https://google.com">
                    Никита Вадимович
                  </a>
                </div>
                <div>
                  <Icon 
                    name="mail"
                    size="large"                  
                  />
                  <a href="mailto:youinroll@youinroll.com">
                    youinroll@youinroll.com
                  </a>
                </div>
                
              </div>
            </Grid.Column>            
          </Grid.Row>         
        </Grid>       
      </Container> 
      <h2>Отзывы</h2>      
         
    </>
  )
}

function LessonCard(){
  const src="https://youinroll.com/storage/media/22e2b7b3d99134319dc38dd138c08bf5-1.jpg";

  return(
  <>
    <Card raised image={src} />
    <Feed>
        <Feed.Event>
          <Feed.Label image='https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130' />
          <Feed.Content>            
            <Feed.Summary>
              Структурное программирование
            </Feed.Summary>
            <Divider hidden />
            <Feed.Date content='2021/04/02' />
          </Feed.Content>
        </Feed.Event>        
      </Feed>    
  </>
  );
}


const extra = (
  <a href="/">
    <Label as='a' color='teal' tag>
      Бесплатно
    </Label>
  </a>
)

function CourseCard(){
  //const src="https://youinroll.com/storage/media/22e2b7b3d99134319dc38dd138c08bf5-1.jpg";

  return(
    <Card
      image='https://youinroll.com/res.php?src=storage/uploads/a06ac42877b1fd390be36f0376ef68b2-1.png&q=100&w=240&h=auto'
      header='Скретч'
      meta='Курс по программированию'
      /* description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' */
      extra={extra}
    />
  );
}



const lessons = [1,2,3,4,5]

function LatestLessons ({secname, subsecs, cols, elem}) {
  return (
    <Container fluid>
      <h2>{secname}</h2>
      <Grid columns={cols} >
        {/* <Grid.Row columns={cols}> */}
          {subsecs.map((lesson) => 
          <Grid.Column key={lesson} mobile={16} tablet={4} computer={3}>
            {elem}
          </Grid.Column>     
          )}
        {/* </Grid.Row> */}
      </Grid>
    </Container>
  )
}


const panes = [
    {
      menuItem: 'Главная',
      render: () => 
      <Tab.Pane attached={false}>
        <LatestLessons secname="Последние уроки" subsecs={lessons} cols={5} elem={<LessonCard />} />
        <Divider />
        <LatestLessons secname="Курсы от канала" subsecs={lessons} cols={6} elem={<CourseCard />} />     
      </Tab.Pane>,
    },
    {
      menuItem: 'Описание',
      render: () => 
      <Tab.Pane attached={false}>
          <ChannelDescription />
      </Tab.Pane>,
    },
    {
      menuItem: 'Видео',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },    
    {
      menuItem: 'Изображения',
      render: () => <Tab.Pane attached={false}><ImageGallery items={images} /></Tab.Pane>,
    },    
    {
      menuItem: 'Расписание',
      render: () => <Tab.Pane attached={false}><TimeTable /></Tab.Pane>,
    },
  ]
  
export default function TabExampleSecondaryPointing () {
    return(
      
        <Tab menu={{ secondary: true, pointing: true, className: "wrapped" }} panes={panes} />
      
    )
}