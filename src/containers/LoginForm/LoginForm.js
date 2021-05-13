
import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import axios from "axios";




export default function LoginForm ({setUser}){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [wrongdata, setWrongData] = useState(null);

    function getUser(){
        /* curl -X POST -F 'login=mdtrunov@gmail.com' -F 'password=!123456789' http://dev.youinroll.com/login?api=v1.1
        {"response":{"user_id":"948","token":"b7"}}
        */
       console.log(login);
       console.log(password);

        axios.post('https://dev.youinroll.com/login?api=v1.1', `login=${login}&password=${password}`  )
          .then(function (response) {
              if (response.data.response.user_id){
                setUser({user: response.data.response});
              }     
          })
          .catch(function (error) {
            setWrongData("Неверный логин или пароль")
            console.log(error);
          });       
    } 

    return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://youinroll.com/YNRLogo.png' /> Войти в аккаунт youinroll
        </Header>
        <Form size='large'>
            <Segment stacked>
                <Form.Input 
                    fluid icon='user' 
                    iconPosition='left' 
                    placeholder='E-mail' 
                    onChange={(e) => setLogin(e.target.value)}
                    error={wrongdata}
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Пароль'
                    type='password'
                    error={wrongdata}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    color='teal' 
                    fluid size='large'
                    disabled={!login && !password}
                    onClick={getUser}
                >
                    Войти
                </Button>
            </Segment>
        </Form>
        <Message>
            Нет аккаунта? <a href='#'>Зарегистрируйтесь</a>
        </Message>
        </Grid.Column>
    </Grid>
    )
}
