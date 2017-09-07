//react是组件化开发
//getInitialState状态   通过this.state获取
var HelloReact = React.createClass({
	getInitialState:function(){
		return {
			"reslove":"help"
		}
	},
	render:function(){
		return (
			console.log(this.state.reslove);
			<div className="header" style={{"color":"red";"header":"50vh"}}>this is my first comp</div>
		)
	}
})


//1.渲染组建
//2.两个参数组建名（单标签），要渲染的位置
ReactDom.render(<HelloReact />,document.getElementById("app"));


var Father=React.createClass({
	getInitialState:function(){
		return {
			"reslove":""
		}
	},
	handChange:function(ev){
		var val=ev.target.value;
		this.setState({
			"reslove":val
		})
	},
	render : function(){
		return(
			<div>
				<input type="text" onChange={this.handChange} />
				<Child {...this.state} />
			</div>
			
		)
	}
})
var Child=React.createClass({
	render:function({
		return(
			<div>
				{this.state}
			</div>
		)
	})
})
ReactDom.render({<Father />,document.g})


var $=(function(){
	var ajax=function(url){
		var xhr=new XMLHttpRequest();
		xhr.open("get",url,true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				success&&success( JSON.parse(xhr.responseText))
			}
		}
	}
	return {
		http:ajax
	}
	
})()

//卸载组件
ReactDOM.unmountComponentAtNode(document.getElementById())
//暴露接口
module.exports=Header;

//es6写法
class Hello extends React.Component{
	render(){
		return(
			<div>this is my hello !!!!!!</div>
		)
	}
}
//暴露接口
export default Hello;


//引入
import {} from "..."









