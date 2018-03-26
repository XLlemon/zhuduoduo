require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import { Link } from 'react-router-dom';

import Lunbo from './lunbo/lunbo.js';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		let bottom = [
			{ txt1: '了解APP', path: '/KnowApp' },
			{ txt1: '长租公寓', path: '/LoneRent' },
			{ txt1: '短租民宿', path: '/ShortRent' },
			{ txt1: '招募房东', path: '/RecruitLandLord' }
		];
		return(
			<div className='box'>
				<div className='lbbox'>
					<Lunbo />
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