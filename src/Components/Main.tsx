import * as React from 'react';
import './css/Main.css';
import AlbumList from './AlbumList';
import ConcertList from './ConcertList';
import Data from '../Data';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';

export interface MainState {
  type: string;
  year: string;
}

export default class Main extends React.Component<any, MainState> {
  constructor(props: any) {
    super(props);

    this.state = { type: 'Album', year: '2017' };
  }

  setListType(type: string, year: string) {
    this.setState({ type: type, year: year });
  }

  getCommandItems() {
    return [
      {
        key: 'DropDown',
        name: 'List Selection',
        subMenuProps: {
          items: [
            {
              key: 'AlbumHeading',
              name: 'Album Lists',
              itemType: ContextualMenuItemType.Header
            },
            {
              key: 'Album2017',
              name: '2017',
              onClick: () => {
                this.setListType('Album', '2017');
              },
            },
            {
              key: 'Album2016',
              name: '2016',
              onClick: () => {
                this.setListType('Album', '2016');
              },
            },
            {
              key: 'Album2015',
              name: '2015',
              onClick: () => {
                this.setListType('Album', '2015');
              },
            },
            {
              key: 'Album2014',
              name: '2014',
              onClick: () => {
                this.setListType('Album', '2014');
              },
            },
            {
              key: 'Album2013',
              name: '2013',
              onClick: () => {
                this.setListType('Album', '2013');
              },
            },
          ]
        }
      }
    ];
  }

  render() {
    let dataName: string;
    let content: JSX.Element;
    switch (this.state.type) {
      case 'Album':
        dataName = `Album-${this.state.year}`;
        content = <AlbumList data={Data[dataName]} />;
        break;
      case 'Concert':
        dataName = `Concert-${this.state.year}`;
        content = <ConcertList data={Data[dataName]} />;
        break;
      default:
        dataName = '';
        content = <ConcertList data={null} />;
        break;
    }

    return (
      <div className="Main">
        <CommandBar items={this.getCommandItems()} />
        {content}
      </div>
    );
  }
}
