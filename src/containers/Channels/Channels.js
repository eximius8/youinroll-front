import React, { useEffect, useState } from 'react';
import {  Container, Grid, Image, Card, Icon, Card } from 'semantic-ui-react';
import './Channels.scss';
// import {VideoList} from '../../components/VideoList/VideoList'; <VideoList  />




const CardExampleImageCard = () => (
  <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)



export default function Channels () {

    const [channels, setChannels] =useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);

    useEffect(() => {
        console.log('fs');
    },[])

    
   

    return (
        <Container fluid className="categories">
            <h1>Просмотр</h1>
            <Grid padded={false} stackable>
                <Grid.Row>
                    <Grid.Column tablet={8} computer={4}>                        
                        <button className="category" >Курсы</button>                                      
                    </Grid.Column>
                    <Grid.Column tablet={8} computer={4}>
                        <button className="category" >Стримы</button>                      
                    </Grid.Column>
                    <Grid.Column tablet={8} computer={4}>
                        <button className="category">Лекции</button>    
                    </Grid.Column>
                    <Grid.Column tablet={8} computer={4}>
                        <button className="category" >Задания</button>    
                    </Grid.Column>
                </Grid.Row>
              
            
                <Grid.Row>                
                    {cards.map((carr) => 
                        <Grid.Column key={carr} tablet={4} computer={3} largeScreen={2}>
                            <CardExampleImageCard  imid={carr} />
                        </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>
        </Container>
    ); 
}


