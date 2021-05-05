import React, { useState } from 'react';
import "./video-js.scss";
//import { Container, Image, Button, Icon } from 'semantic-ui-react';

import VideoPlayer from './video.js';
import { Button, Comment, Form, Grid, Image } from 'semantic-ui-react'


//const commentDate = new Date();


function CommentExampleReplyFormOuter() {

  const [comments, setComments] = useState([
   /*  {
      ava: 'https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130',
      authorname: "Никита Вадимович",
      commenttext: "Пишем в чат",
      timeadded: 'August 19, 2020 23:15:30 GMT+00:00',
    } */
  ])

  const [typedComment, setTypedComment] = useState("");

  function addComment(){
    
    const currentDate = new Date();
    const addedComment = {
      ava: 'https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130',
      authorname: "Никита Вадимович",
      commenttext: typedComment,
      timeadded: currentDate.toLocaleString(),
    };
    setComments(oldComments => [...oldComments, addedComment]);
    setTypedComment("");

  }

  return (  
      <Comment.Group>
        {!comments && <p>Пока никто не оставил комментариев</p>}
        {comments.map(
          (comment, key) => 
            <Comment key={key}>
              <div>
                  <Image size='mini' inline circular src={comment.ava} />
              </div>
              <Comment.Content>
                <Comment.Author>{comment.authorname}</Comment.Author>
                <Comment.Metadata>
                  <div>{comment.timeadded}</div>
                </Comment.Metadata>
                <Comment.Text>
                  {comment.commenttext}
                </Comment.Text>          
              </Comment.Content>
            </Comment>
        )}      
    
        <Form 
          reply
          onSubmit={() => addComment()}
        >
          <Form.TextArea 
            className="commentForm"
            placeholder='Ваш комментарий'
            value={typedComment} 
            onChange={(e) => setTypedComment(e.target.value)} 
          />
          <Button 
            content='Добавить комментарий' 
            labelPosition='left' 
            icon='edit' 
            primary
            disabled={!typedComment}
          />
        </Form>
      </Comment.Group>
    )
}



const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    sources: [{
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }]
  };
  

export default function Stream(){

  return(
    <div className="videobox">
        <Grid columns={16}>            
                <Grid.Column width={11}>
                    <VideoPlayer { ...videoJsOptions } />
                </Grid.Column>
                <Grid.Column width={5}>
                    <div>
                        <CommentExampleReplyFormOuter />
                    </div>
                </Grid.Column>            
        </Grid>     
    </div>    
  )
}

