import React from 'react';
import { Tab, Grid, Container, Card, Feed, Divider, Label } from 'semantic-ui-react';
// import YouTube from 'react-youtube';

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
           
      </Tab.Pane>,
    },
    {
      menuItem: 'Видео',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },    
    {
      menuItem: 'Изображения',
      render: () => <Tab.Pane attached={false}>Изображения</Tab.Pane>,
    },    
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