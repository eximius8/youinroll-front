import React, { useEffect } from 'react';
import {  Container, Grid, Image, Card, Icon, } from 'semantic-ui-react';
import './Categories.scss';
// import {VideoList} from '../../components/VideoList/VideoList'; <VideoList  />




const CardExampleImageCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
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

export default function Categories () {

    useEffect(() => {
        console.log('fs');
    },[])

    const cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  
   

    return (
        <Container fluid className="categories">
            <h1>Просмотр</h1>
            <Grid padded={false} centered stackable>
                <Grid.Row>
                    <Grid.Column tablet={6} computer={4}>
                        <button className="category" >Курсы</button>                       
                    </Grid.Column>
                    <Grid.Column tablet={6} computer={4}>
                        <button className="category" >Стримы</button>                      
                    </Grid.Column>
                    <Grid.Column tablet={6} computer={4}>
                        <button className="category">Лекции</button>    
                    </Grid.Column>
                    <Grid.Column tablet={6} computer={4}>
                        <button className="category" >Задания</button>    
                    </Grid.Column>
                </Grid.Row>
              
            
                <Grid.Row>                
                    {cards.map((carr) => 
                        <Grid.Column key={carr}  width={2}>
                            <CardExampleImageCard  />
                        </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>
        </Container>
    ); 
}


