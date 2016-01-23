var React = require('react');
var ReactDOM = require('react-dom');
var nameList=[<h1>朱二狗</h1>,<h1>赵尼玛</h1>];
var HelloMessage=React.createClass({
	propTypes:{
		name:React.PropTypes.number.isRequired
	},
	getDefaultProps:function(){
		return {name:"赵尼玛"}
	},
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
				);

	}
});
var MyComponent=React.createClass({
	handleClick:function(){
		alert(this.refs.myInputText.value);
	},
	render:function(){
		return  <div>
				<input type="text" ref="myInputText"/>
				<input type="button" value="click me" onClick={this.handleClick}/>
				</div>
	}
})
var LinkButton=React.createClass({
	getInitialState:function(){
		return {likeed:false}
	},
	handleClick:function(){
		this.setState({likeed:!this.state.likeed});
	},
	render:function(){
		var txt = this.state.likeed?"likeed":"unlike";
		return <p onClick={this.handleClick}>
					click toggle txt:{txt}
				</p>
	}
})
ReactDOM.render(
	<LinkButton />, 
	document.getElementById('root')
	);
