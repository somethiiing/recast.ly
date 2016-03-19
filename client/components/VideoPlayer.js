var VideoPlayer = ({video}) => (
    !video ? <div>Waiting for video to load...</div> :
    <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
  );

window.VideoPlayer = VideoPlayer;



// class VideoPlayer extends React.Component {
//   constructor(props) {

//     super(props);
//   }



//   render() {

//     return (
//       <div className="video-player">
//         <div className="embed-responsive embed-responsive-16by9">
//           <iframe className="embed-responsive-item" src={window.videoURL} allowFullScreen></iframe>
//         </div>
//         <div className="video-player-details">
//           <h3>{window.videoTitle}</h3>
//           <div>{window.videoDesc}</div>
//         </div>
//       </div>
//       );
//   }
// }



// // class VideoPlayer extends React.Component {
// //   constructor(props) {

// //     super(props);
// //   }
// //   render() {
// //     if(window.temp === undefined) {
// //       return (
// //         <div className="video-player">
// //           <div className="embed-responsive embed-responsive-16by9">
// //             <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe>
// //           </div>
// //           <div className="video-player-details">
// //             <h3>title</h3>
// //             <div>desc</div>
// //           </div>
// //         </div>
// //         );
// //     }    
// //   } else {
// //           return (
// //         <div className="video-player">
// //           <div className="embed-responsive embed-responsive-16by9">
// //             <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe>
// //           </div>
// //           <div className="video-player-details">
// //             <h3>{window.temp.props.items.snippet.title}</h3>
// //             <div>desc</div>
// //           </div>
// //         </div>
// //         );
// //   }
// // }

// // window.VideoPlayer = VideoPlayer;
