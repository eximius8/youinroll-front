import React, {useState, useEffect} from 'react';
import {Form, Icon, Image, Input,  Menu, Dropdown} from 'semantic-ui-react';// Button, Header, Modal
import './HeaderNav.scss';
// import logo from '../../assets/images/logo.jpg';
import {Link, withRouter} from 'react-router-dom';


const options = [
  { key: 1, text: 'Настройки', value: 1, icon: 'cog', className: "dropitem" },
  { key: 2, text: 'Помощь', value: 2, icon: "help circle", className: "dropitem"  },
  { key: 3, text: 'Обратная связь', value: 3, icon: "commenting", className: "dropitem"  },
  { key: 4, text: 'Выйти', value: 4, icon: 'log out', className: "dropitem"  },
]




function SearchBar({props}){

  const [searchquery, setQuery ] = useState("");
  
  const  onInputChange = (event) => {
    setQuery(event.target.value);    
  };

  const onSubmit = () => {
    const escapedSearchQuery = encodeURI(searchquery);
    props.history.push(`/results?search_query=${escapedSearchQuery}`);
  };

  return(
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
  )
}

function HeaderNav() { 

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 760)    
  },[setIsMobile])
  
   
  return (
    // 1
    <Menu borderless className='top-menu' fixed='top'>
      {/* 2 */}
      {/* <Menu.Item header >
        <button 
          onClick={() => setIsMenuSmall(!isMenuSmall)}            
          className="noHover" 
        >          
          <Icon name="bars" size='big' className='burger-top' />
        </button>   
      </Menu.Item> */}
        {/* 2' */}
      <Menu.Item header className='logo'>
        <Link to='/'>          
          <Image src={`https://youinroll.com/YNRLogo.png`}  size='mini'/>
        </Link>
      </Menu.Item>
      {/* 3 */}
      <Menu.Menu className='nav-container'>
        {!isMobile && <SearchBar />}
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
            
            <Menu.Menu position='left'>
              <Dropdown
                item
                fluid
                className="dropdown"
                /* simple */
                trigger={<Image 
                  src='https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130' 
                  avatar/>}
                direction='left'
                floating
                options={options}
              />  
            </Menu.Menu>      
          </Menu.Item>
        </Menu.Menu>
      </Menu.Menu>
      
    </Menu>
  );
  
  
}

export default withRouter(HeaderNav);
