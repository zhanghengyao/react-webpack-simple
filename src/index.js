var React = require('react');
var ReactDOM = require('react-dom');
var nameList=[<h1>朱二狗</h1>,<h1>赵尼玛</h1>];
var HelloMessage=React.createClass({
	render:function(){
		return <h1>hello {this.props.name}</h1>
	}
})
var NoteList=React.createClass({
	render:function(){
		return (
				<ol>
				{
					React.Children.map(this.props.children, function(item){
						return <li>{item}</li>;
					})
				}
				</ol>
				// <ol>
			 //      {
			 //        React.Children.map(this.props.children, function (child) {
			 //          return <li>{child}</li>;
			 //        })
			 //      }
			 //      </ol>		
				);

	}
});
ReactDOM.render(
	<NoteList>
		<span>hello</span>
		<span>world</span>
		<span>reacte</span>
		<a>sb</a>
		<div>
			<div>fuck</div>
			<div>bitch</div>
		</div>	
	</NoteList>, 
	document.getElementById('root')
	);
