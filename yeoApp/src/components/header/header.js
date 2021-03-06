import React,{ Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import '../../styles/header.scss';

import logo from '../../images/logo.png';

import menu  from '../../images/new-index-menu.png';

var kai=true;

class Header extends Component{
	constructor(props){
		super(props)
		console.log('');
	}
	btn(){
		var menu = document.querySelector('.menu');
		var M = document.querySelector('.M');
		var nav = document.querySelector('.nav');
		if(kai){
			kai=!kai
			nav.style.display='block';
		}else{
			kai=!kai;
			M.style.display='block';
			nav.style.display='none';
		}
	}
	render(){
		let navs=[{"text1":'首  页','path':'/'},{"text1":'了解App','path':'/KnowApp'},{"text1":'长租公寓','path':'/LoneRent'},{"text1":'短租公寓','path':'/ShortRent'},{"text1":'招募房东','path':'/RecruitLandLord'},{"text1":'品牌商入口','path':'/Entrance'}]
		return (
			<div className="header">
				<div className='header-inner clearfix'>
					<a className='logo' href="http://www.zhudd.com">
						<img src={logo} />
					</a>
					<span className='menu' id='phoneMenuBtn' onClick={()=>{this.btn()}}>
						<img className='M' src={menu} />
					</span>
					<ul className='nav clearfix' id='nav'>
						{
							navs.map((item,index)=>{
								return(
									<li key={index}>
										<NavLink exact to={item.path} className='aa' activeClassName='a1'>{item.text1}</NavLink>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}
export default Header;