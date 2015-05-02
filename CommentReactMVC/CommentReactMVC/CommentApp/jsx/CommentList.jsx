var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
    render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment Author={comment.Author}>{comment.Text}</Comment>
			);
		});
        return(
			<div className="well">
				<h2>Hello, world! I am a CommentList (Component-2).</h2>
				{commentNodes}
			</div>
		);
    }
});

module.exports = CommentList;