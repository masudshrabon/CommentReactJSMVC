var React = require('react');
var HelloWorld = require('./HelloWorld.jsx');
var CommentBox = require('./CommentBox.jsx');

var data = [
	{Author:"Masud Shrabon", Text: "This is comment-1"},
	{Author:"Rashed Riyadh", Text: "This is comment-2"},
	{ Author: "Jordan Walke", Text: "This is *another* comment" }
];

React.render(
    <HelloWorld />,
    document.getElementById('hello')
);
React.render(
    <CommentBox url="/comments" submitUrl="/comments/new" pollInterval={2000}/>,
    document.getElementById('commentBoxId')
);