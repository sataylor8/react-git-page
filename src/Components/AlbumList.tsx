import * as React from "react";
import "./css/AlbumList.css";
import ListItem from "./ListItem";

export interface AlbumListProps {
  data: any;
}

export default class AlbumList extends React.Component<AlbumListProps, any> {
  render() {
    let { data } = this.props;
    return (
      <div className="Container">
        {data.Mentions.length > 0 && (
          <div>
            <h1 className="MentionsH1">{`${data.Year} Honorable Mentions`}</h1>
            <h2 className="MentionsH2">
              {" "}
              (List in alphabetical order by Artist){" "}
            </h2>
            {data.Mentions.map((mention: any) => {
              return (
                <ListItem
                  key={mention.AlbumName}
                  Row1={mention.AlbumName}
                  Row2={mention.ArtistName}
                  ImageName={mention.ImageName}
                  SongUrl={mention.SongUrl}
                />
              );
            })}
          </div>
        )}
        <h1 className="MentionsH1">{`${data.Year} Top Albums`}</h1>
        {data.StrictRank ? (
          data.Ranked.map((album: any, index: number) => {
            return (
              <ListItem
                key={album.AlbumName}
                Row1={`#${(data.Ranked.length - index).toString()}`}
                Row2={album.AlbumName}
                Row3={album.Artistname}
                ImageName={album.ImageName}
                SongUrl={album.SongUrl}
              />
            );
          })
        ) : (
          <div>
            <h2 className="MentionsH2">
              {" "}
              (Album groups in alphabetical order by Artist){" "}
            </h2>
            {data.Ranked.map((albumCollection: any, index: number) => {
              return (
                <div key={`Top${index}Albums`}>
                  <h2 className="MentionsH1Half">
                    {" "}
                    {`Top ${5 * (data.Ranked.length - index)} Albums`}
                  </h2>
                  {albumCollection.map((album: any) => {
                    return (
                      <ListItem
                        key={album.AlbumName}
                        Row1={album.AlbumName}
                        Row2={album.ArtistName}
                        ImageName={album.ImageName}
                        SongUrl={album.SongUrl}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
