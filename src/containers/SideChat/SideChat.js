
import React, { useState } from 'react';
import "./SideChat.scss";
import { Button, Form} from 'semantic-ui-react'



export default function SideChat() {

    const [comments, setComments] = useState([
      {
        ava: 'https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130',
        authorname: "Никита Вадимович",
        commenttext: "Пишем в чат",
        timeadded: 'August 19, 2020 23:15:30 GMT+00:00',
      }
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
        <div>
            <h3>Чат трансляции</h3>     
          {comments.map(
            (comment, key) => 
              <div key={key} className="chatmessage">  
                  <strong className="author">{comment.authorname}: </strong>
                  <span>
                    {comment.commenttext}
                  </span>        
              </div>
          )}   
      
          <Form 
            reply
            onSubmit={() => addComment()}
            className="formchat"
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
        </div>
      )
  }