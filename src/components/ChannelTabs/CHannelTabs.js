import React from 'react';
import { Tab } from 'semantic-ui-react';


const panes = [
    {
      menuItem: 'Главная',
      render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: 'Описание',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Видео',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    ,
    {
      menuItem: 'Изображения',
      render: () => <Tab.Pane attached={false}>Изображения</Tab.Pane>,
    },
    ,
    {
      menuItem: 'Расписание',
      render: () => <Tab.Pane attached={false}>Расписание</Tab.Pane>,
    },
  ]
  
export default function TabExampleSecondaryPointing () {
    return(
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    )
}