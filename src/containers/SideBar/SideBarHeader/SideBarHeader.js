import React from 'react';
import { Grid,  Menu} from 'semantic-ui-react';
import './SideBarHeader.scss';

export function SideBarHeader(props) {
  const heading = props.title ? props.title.toUpperCase() : '';
  const act = props.act;
  return (
    <Menu.Item>
      <Menu.Header className='side-bar-header'>
        <Grid columns={2} textAlign='right' >
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              {heading} 
            </Grid.Column>
            <Grid.Column >
              {act && act}
            </Grid.Column>            
            
          </Grid.Row>        
        </Grid>       
      </Menu.Header>
    </Menu.Item>
  );
}