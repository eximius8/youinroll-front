import React, { useState } from 'react';
import {  Container, Image, Icon} from 'semantic-ui-react';
import './Channels.scss';
// import {VideoList} from '../../components/VideoList/VideoList'; <VideoList  />
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



const CardExampleImageCard = ({imid}) => (
    <div className="channelcard">
        <div>
            <Image src={`https://picsum.photos/id/${imid}/200`} size='tiny' circular  />
        </div>
        <h3>Ольга Арбузова</h3>
        <h4>@m_galustjan</h4>
        <p><strong>2.5М</strong></p>
        <div>Подписчики</div>
        
    </div>
)



export default function Channels () {

    const [channels, setChannels] =useState([0,1,2,3,4,5,6,7,8,9]);


    return (
        <Container fluid className="categories">
            <h1>Каналы</h1>
            <Carousel
                plugins={[
                    'infinite',
                   // 'arrows',
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <button className="arrowbutton">
                                <Icon size="big" name="chevron left" />
                                </button>,
                            arrowRight: <button className="arrowbutton">
                                <Icon size="big" name="chevron right" />
                                </button>,
                            addArrowClickHandler: true,
                        }
                    },
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 4,                            
                        }
                    },
                ]}
            >
                {channels.map((channel) => <CardExampleImageCard key={channel} imid={channel} /> )}                
               
            </Carousel>
        </Container>
    ); 
}


