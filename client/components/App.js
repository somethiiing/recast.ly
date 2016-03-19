class App extends React.Component {
  constructor(props) {
    this.state = 

  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer/>
        </div>
        <div className="col-md-5">
          <VideoList items={window.exampleVideoData}/>
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



