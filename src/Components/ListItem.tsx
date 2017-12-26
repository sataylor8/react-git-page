import * as React from 'react';
import './css/ListItem.css';
import Data from '../Data';

export interface ListItemProps {
  Row1: string;
  Row2: string;
  Row3?: string;
  ImageName: string;
  SongUrl?: string;
}

export default class ListItem extends React.Component<ListItemProps, any> {
  render() {
    let { Row1, Row2, Row3, ImageName, SongUrl } = this.props;
    let anchorStyle = {};
    if (!SongUrl) {
      anchorStyle = {
        pointerEvents: 'none',
        cursor: 'default',
      }
    }
    return (
      <div className="Container">
        <div className="Divider"/>        
        <a style={anchorStyle} target="_blank" href={SongUrl} className="ImageWrapper">
          <img className="Image" src={Data[ImageName]}/>
        </a>
        <h2 className="Row1"> {Row1} </h2>
        <h3 className="Row2"> {Row2} </h3>
        <h4 className="Row3"> {Row3} </h4>
      </div>
    );
  }
}
