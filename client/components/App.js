class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  handleVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList 
          handleVideoListEntryClick = {this.handleVideoListEntryClick.bind(this)}
          videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList items={window.exampleVideoData}/>
//     </div>
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));



