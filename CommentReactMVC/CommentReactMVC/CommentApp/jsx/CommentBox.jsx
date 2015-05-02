var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var CommentBox= React.createClass({
	loadCommentsFromServer: function(){
		var xhr = new XMLHttpRequest();
		xhr.open('get', this.props.url,true);
		xhr.onload = function(){
			var dataComment = JSON.parse(xhr.responseText);
			this.setState({data: dataComment});
		}.bind(this);
		xhr.send();
	},
	handleCommentSubmit: function(comment) {
		var data = new FormData();
		data.append('Author', comment.Author);
		data.append('Text', comment.Text);

		var xhr = new XMLHttpRequest();
		xhr.open('post', this.props.submitUrl, true);
		xhr.onload = function(){
			this.loadCommentsFromServer();
		}.bind(this);
		xhr.send(data);
   },
	getInitialState: function(){
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},

	render: function(){
		return(
			<div className="well">
				<h1>Hello, world! I am a CommentBox (Component-1).</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

module.exports = CommentBox;