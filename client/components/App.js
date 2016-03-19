class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: null,
      videos: []
    };
  }
 // refactored code from provided solution
  componentDidMount() {
    this.getYoutubeVideos('cute cats  ');
  }

  getYoutubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };
    
    searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }


  handleVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav 
          handleSearchInputChange={_.debounce((input) => this.getYoutubeVideos(input), 400)}
        />
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



