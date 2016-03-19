class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);

    // window.description = this.props.items.
    
    var onListItemClick = (event) => {
      window.videoURL = "https://www.youtube.com/embed/" + this.props.items.id.videoId;
      window.videoTitle = this.props.items.snippet.title;
      window.videoDesc = this.props.items.snippet.description;
      window.VideoPlayer.prototype.render();
      console.log(this);
    };

    return (
      
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.items.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div onClick={onListItemClick} className="video-list-entry-title">{this.props.items.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.items.snippet.description}</div>
        </div>
      </div>
    );
  }
}

// var VideoListEntry = (props) => (
//   <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src={window.exampleVideoData[0].snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">{window.exampleVideoData[0].snippet.title}</div>
//       <div className="video-list-entry-detail">{window.exampleVideoData[0].snippet.description}</div>
//     </div>
//   </div>
// );
window.VideoListEntry = VideoListEntry;


//{props.snippet.thumbnails.default.url}