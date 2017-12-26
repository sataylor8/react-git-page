import * as React from 'react';
import "./css/Main.css";

export interface ConcertListProps {
  data: any
}

export default class ConcertList extends React.Component<ConcertListProps, any> {
  render() {
    return (
      <div className="ConcertList">
        {this.props.data.Year}
      </div>
    );
  }
}
