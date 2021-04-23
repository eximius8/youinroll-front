import React from 'react';
import {Container, Icon, Menu} from "semantic-ui-react";
import './SideBarItem.scss';
import {Link, withRouter, useLocation} from 'react-router-dom';


export class SideBarItem extends React.Component {
  render() {
    // React will ignore custom boolean attributes, therefore we pass a string
    // we use this attribute in our SCSS for styling
    const highlight = this.shouldBeHighlighted() ? 'highlight-item' : null;
    return (
      <Link to={{pathname: this.props.path}}>
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
          <div className='sidebar-item-alignment-container'>            
              <span>
                <Icon size='large' name={this.props.icon}/>
              </span>
              <span>{this.props.label}</span> 
          </div>
        </Menu.Item>
      </Link>
    );
  }

  shouldBeHighlighted() {
    const {pathname} = this.props.location;
    if (this.props.path === '/') {
      return pathname === this.props.path;
    }
    return pathname.includes(this.props.path);
  }
}

export function SideBarItemSmall({label, path, icon}){ 

  let location = useLocation();

   function shouldBeHighlighted() {
    const pathname = location.pathname;
    if (path === '/') {
      return pathname === path;
    }
    return pathname.includes(path);
  } 

  const highlight = shouldBeHighlighted() ? 'highlight-item' : null;
 

  return(
    <Link to={{pathname: path}}>
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
          <Container 
            fluid 
            className='sidebar-items-shrinked'
            textAlign='center'
          >            
              <div>
                <Icon size='large' name={icon}  />
              </div>
              <div>
                {label}
              </div> 
          </Container>
        </Menu.Item>
      </Link>
  )

}

export default withRouter(SideBarItem);