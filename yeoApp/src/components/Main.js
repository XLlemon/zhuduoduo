require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../images/~ADADON4VZH(G@LAGP57)YX.png'
import img2 from '../images/~(%7QF0VVRKY}KT929Q522P.png'
import img3 from '../images/new1.jpg'
import img4 from '../images/recruitLandlord_banner.jpg'

var image = [img1, img2, img3, img4]

let bottom = [
	{ txt1: '了解APP', path: '/KnowApp' },
	{ txt1: '长租公寓', path: '/LoneRent' },
	{ txt1: '短租民宿', path: '/ShortRent' },
	{ txt1: '招募房东', path: '/RecruitLandLord' }
]

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			itm: setInterval(() => {
				this.setState({
					index: this.state.index + 1
				})
				if(this.state.index >= 4) {
					this.setState({
						index: 0
					})
				}
			}, 2000)
		}
	}
	btn(res) {
		this.setState({
			index: res
		})
	}
	componentWillUnmount(){
	    clearInterval(this.state.itm);
	}
	render() {
		return(
			<div className='box'>
     	<div className='lbbox'>
     		{
     			image.map((item,index)=>{
     				return (
     					<div key={index} src={item} className='img' style={{backgroundImage:'url('+ item +')',opacity:this.state.index==index?1:0}}></div>
     				)
     			})
     		}
     		<div className='btnbox'>
     				<div className='btnb'>
	     				{
	     					image.map((item,index)=>{
	     						return (
	     							<div key={index} className={this.state.index==index?"btn a1":'btn'} onClick={()=>{this.btn(index)}}></div>
	     						)
	     					})
	     				}
     				</div>     				
     		</div>
     		
     		<div className='four' id='four'>
     			{
     				bottom.map((item,index)=>{
     					return (
     						<div className={"bots bot"+index} key={index}>
     							<Link to={item.path} ></Link>
     						</div>
     					)
     				})
     			}
     		</div>    		
     	</div>
    </div>
		)
	}
}

AppComponent.defaultProps = {};

export default AppComponent;