var React = require('react');

var CommentForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var author = this.refs.author.getDOMNode().value.trim();
		var text = this.refs.text.getDOMNode().value.trim();
		if(!text || !author){
			return;
		}
		this.props.onCommentSubmit({Author: author, Text: text});
		this.refs.author.getDOMNode().value = '';
		this.refs.text.getDOMNode().value = '';
		return
	},
	render: function() {
		return (
			<div className="well">
				<h2>Hello, world! I am a CommentForm (Component-2).</h2>
				<form onSubmit= {this.handleSubmit}>
					<input type="text" placeholder="Your name" ref="author" />
					<input type="text" placeholder="Say something..." ref="text" />
					<input type="submit" value="Post" />
				 </form>
			</div>
		);
	  }
});

module.exports= CommentForm;