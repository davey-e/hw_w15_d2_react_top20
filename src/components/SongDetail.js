import React from 'react';

const SongDetail = (props) => {
  console.log("Props: ", props);
  return (
    <div className="song">
      <p className="songTitle">
        {props.title}
      </p>
    </div>
  )
}

export default SongDetail
