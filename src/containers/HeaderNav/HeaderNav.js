import React, {useState} from 'react';
import {Form, Icon, Image, Input, Menu, Button, Header, Modal} from 'semantic-ui-react';
import './HeaderNav.scss';
// import logo from '../../assets/images/logo.jpg';
import {Link, withRouter} from 'react-router-dom';



function UserModal({ctabut}) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={ctabut}
    >
      <Header icon>        
        Профиль пользователя
      </Header>
      <Modal.Content>
        <p>
          Профиль пользователя Никита Вадимович
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Закрыть
        </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

function HeaderNav({props, isMenuSmall, setIsMenuSmall}) {
  
  const [searchquery, setQuery ] = useState("");
  
  const  onInputChange = (event) => {
    setQuery(event.target.value);    
  };

  const onSubmit = () => {
    const escapedSearchQuery = encodeURI(searchquery);
    props.history.push(`/results?search_query=${escapedSearchQuery}`);
  };

  
  
    return (
      // 1
      <Menu borderless className='top-menu' fixed='top'>
        {/* 2 */}
        <Menu.Item header >
          <Button 
            onClick={() => setIsMenuSmall(!isMenuSmall)}
            basic 
            className="button" 
          >          
            <Icon name="bars" size='big' className='burger-top' />
          </Button>   
        </Menu.Item>
         {/* 2' */}
        <Menu.Item header className='logo'>
          <Link to='/'>          
            <Image src={`https://youinroll.com/YNRLogo.png`}  size='mini'/>
          </Link>
        </Menu.Item>
        {/* 3 */}
        <Menu.Menu className='nav-container'>
          <Menu.Item className='search-input'>
            <Form onSubmit={onSubmit}>
              {/* 4 */}
              <Form.Field>
                <Input placeholder='Искать'
                       size='small'
                       action='Поиск'
                       value={searchquery}
                       onChange={onInputChange}
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          {/* 5 */}
          <Menu.Menu position='right'>
            <Menu.Item>
              {/* 6 */}
              <Icon className='header-icon' name='video camera' size='large'/>
            </Menu.Item>
            
            {/* <Menu.Item>
              <Icon className='header-icon' name='chat' size='large'/>
            </Menu.Item> */}
            <Menu.Item>
              <Icon className='header-icon' name='bell outline' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='block layout' size='large'/>
            </Menu.Item>            
            <Menu.Item name='avatar'>
              <UserModal 
              ctabut={
                <Image src='https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130' avatar/>
               }
              />              
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
       
      </Menu>
    );
  
  
}

export default withRouter(HeaderNav);
