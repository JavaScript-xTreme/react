/** @jsx React.DOM */

var Clock = React.createClass({
  getInitialState: function(){
    return {seconds: 0};
  },
  startTimer: function(){
    clearInterval(this.timer);
    this.timer = setInterval(function(){
      this.setState({seconds: this.state.seconds + 1});
    }.bind(this), 1000);
  },
  stopTimer: function(){
    clearInterval(this.timer);
  },
  render: function() {
    return (
      <div className='clock'>
        <Title name={this.props.face} />
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <div><span>{this.state.seconds}</span> <span>seconds</span></div>
      </div>
    );
  }
});
