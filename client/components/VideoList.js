var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video =>
        <VideoListEntry 
        handleVideoListEntryClick={props.handleVideoListEntryClick}
        video={video} />
        )}
  </div>
);

window.VideoList = VideoList;