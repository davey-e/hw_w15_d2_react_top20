import React from 'react';
import SongDetail from './SongDetail.js';

const SongList = (props) => {
  const songNodes = props.songs.map((song) =>{
    return(
      <SongDetail title={song.title.label} key={song.id}>
      </SongDetail>
    );
  });
  return(
    <div className="songList">
      {songNodes}
    </div>
  )
}

export default SongList;
