import React, {Component} from 'react';

class SongsContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const songsObjects = JSON.parse(jsonString);
      this.setState({songs: songsObjects});
      console.log(this.state);
    })
    request.send();
  }

  render(){
    return(
      <h2>Songs Container</h2>
    )
  }

}

export default SongsContainer;
