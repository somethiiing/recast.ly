var VideoList = (props) => (
  <div className="video-list media">
  <ul>
    {props.items.map(items =>
        <VideoListEntry items={items} />
        )}
  </ul>
  </div>
);

window.VideoList = VideoList;