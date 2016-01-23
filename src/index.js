var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
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
});
var MyInput=React.createClass({
	getInitialState:function(){
		return {value:'test'}
	},
	handleClick:function(e){
		this.setState({value:e.target.value});
	},
	render:function(){
		let value = this.state.value;
		return <div>
				<input type="text" onChange={this.handleClick}/>
				{value}
				</div>
	}
})
var HelloChange = React.createClass({
	getDefaultProps:function(){
		return {name:'react'}
	},
	getInitialState:function(){
		return {opacity:1.0,flag:true}
	},
	componentDidMount:function(){
		this.timer = setInterval(function(){
			let opacity=this.state.opacity,flag=this.state.flag;
			if(flag){
				opacity -= 0.05;
				if(opacity<0.1){
					flag=false;
				}
			}else{
				opacity += 0.05;
				if(opacity>1.0){
					opacity=1.0;
					flag=true;
				}
			}
			this.setState({opacity:opacity,flag:flag});
		}.bind(this),100)
	},
	render:function(){
		return <h1 style={{opacity:this.state.opacity}}>
				hello {this.props.name}
				</h1>
	}
})
var RepoList = React.createClass({
  getInitialState: function() {
    return { loading: true, error: null, data: null};
  },

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});
ReactDOM.render(
	<RepoList
    promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
  />, 
	document.getElementById('root')
	);
