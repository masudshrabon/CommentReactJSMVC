var React = require('react');

 var Comment = React.createClass({
  render: function() {
    return (
      <div className="panel panel-body">
		<h3>Hello, world! I am a Comment (Component-3).</h3>
		<h4><b>Author: </b>{this.props.Author}</h4>
        <p><b>Comment: </b>{this.props.children}</p>
      </div>
    );
  }
});

module.exports = Comment;