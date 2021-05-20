import React, { useEffect, useState } from 'react';
import {  Container, Grid, Image } from 'semantic-ui-react';
import './Categories.scss';
// import {VideoList} from '../../components/VideoList/VideoList'; <VideoList  />
import {Carousel} from '3d-react-carousal';



const CardExampleImageCard = ({imid}) => (
  <div className="groupcard">
    <Image fluid src={`https://picsum.photos/id/${imid}/200/300`}  />
    <h3 className="groupheading">
        Курсы Python
    </h3>
    <div className="groupviewers">
        <a href="/">
            100 млн зрителей
        </a>
    </div>
    <div className="grouptags">
        <button>
            Боевики
        </button>
        <button>
            Игры
        </button>
    </div>
  </div>
)

export default function Categories () {

    //const [cards, setCards] =useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
    const cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    useEffect(() => {
        console.log('fs');
    },[])

    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    
   

    return (
        <Container fluid className="categories">
            <Carousel slides={slides} autoplay={false} interval={1000}/>
            <h1>Просмотр</h1>
            <Grid columns={12}>
                <Grid.Row columns={12}>                
                    <Grid.Column tablet={6} columns={4}>                        
                        <button className="category" >Курсы</button>
                        <button className="category" >Стримы</button>                                     
                    </Grid.Column>                    
                    <Grid.Column tablet={6} columns={4}>
                        
                    </Grid.Column>
                    <Grid.Column tablet={6} columns={4}>
                        <button className="category">Лекции</button>    
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


