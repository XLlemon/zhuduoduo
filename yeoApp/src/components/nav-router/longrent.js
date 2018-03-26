import React from 'react';
import '../../styles/router-style/longrent.scss';
import Download from '../download/download.js';

import Lunbo from '../lunbo/lunbo';

import p1 from '../../images/partner1.jpg';
import p2 from '../../images/partner2.jpg';
import p3 from '../../images/partner3.jpg';
import p4 from '../../images/partner4.jpg';
import p5 from '../../images/partner5.jpg';
import p6 from '../../images/partner6.jpg';
import p7 from '../../images/partner7.jpg';
import p8 from '../../images/partner8.jpg';
import p9 from '../../images/partner9.jpg';
import p10 from '../../images/partner10.jpg';
import p11 from '../../images/partner11.jpg';
import p12 from '../../images/partner12.jpg';



class LoneRent extends React.Component {
	constructor(props){
		super(props)
		console.log('');
	};	
  render() {
  	let picture=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]
    return (
      <div className="lonerent">
      	{/*轮播*/}
    	<Lunbo />
    	{/*理由*/}
    	<div className='section' id='selectReason'>
    		<h4 className='title-s1'>选择住多多的理由</h4>
    		<h5 className='title-en'>SELECT REASON</h5>
    		<ul className='select-reason-list clearfix' id='s-list'>
    			<li>
    				<div className='list-box' id='list-b'>
    					<i className='select-reason-item item1'></i>
    					<p className='text'>品质公寓，全线进驻</p>
    				</div>
    			</li>
    			<li>
    				<div className='list-box'>
    					<i className='select-reason-item item2'></i>
    					<p className='text'>认证实拍，实时更新</p>
    				</div>
    			</li>
    			<li>
    				<div className='list-box'>
    					<i className='select-reason-item item3'></i>
    					<p className='text'>精致装修，配套服务</p>
    				</div>
    			</li>
    			<li>
    				<div className='list-box'>
    					<i className='select-reason-item item4'></i>
    					<p className='text'>促销秒杀，优惠多多</p>
    				</div>
    			</li>
    		</ul>
    	</div>
    	{/*设施*/}
    	<div className='facilities'>
    		<div className='section' id='fax'>
    			<ul className='facilities-list clearfix' id='id-facilities-list'>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon1'></i>
    					<i className='facilities-line'></i>
    				</li>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon2'></i>
    					<i className='facilities-line'></i>
    				</li>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon3'></i>
    					<i className='facilities-line'></i>
    				</li>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon4'></i>
    					<i className='facilities-line'></i>
    				</li>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon5'></i>
    					<i className='facilities-line'></i>
    				</li>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon6'></i>
    					<i className='facilities-line'></i>
    				</li>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon7'></i>
    					<i className='facilities-line'></i>
    				</li>
    				<li className='facilities-item'>
    					<i className='facilities-icon icon8'></i>
    				</li>
    			</ul>
    		</div>
    	</div>
    	{/*合作*/}
    	<div className='partner' id='par-box'>
    		<div className='section' id='par'>
    			<h4 className='title-s1'>合作品牌</h4>
    			<h5 className='title-en'>COOPERATION BRAND</h5>
    			<ul className='partner-list clearfix' id='p-list'>
	    			{
	    				picture.map((item,index)=>{
	    					return (
	    						<li key={index}>
			    					<img src={item} />
			    				</li>
	    					)
	    				})
	    			}
    				
    			</ul>
    		</div>
    	</div>
    	{/*倡议*/}
    	<div className='proposal' id='pro-box'>
    		<div className='section' id='pro'>
    			<h4 className='title-s1'>行业倡议</h4>
    			<h5 className='title-en'>INDUSTRY INITIATIVE</h5>
    			<ul className='proposal-list clearfix' id='r-list'>
    				<li>
    					<i className='sponsor-icon icon1'>房屋质量问题无责换租</i>
    				</li>
    				<li>
    					<i className='sponsor-icon icon2'>退租押金3个工作日返还</i>
    				</li>
    				<li>
    					<i className='sponsor-icon icon3'>3天不满意退款</i>
    				</li>
    			</ul>
    		</div>
    	</div>
    	{/*下载*/}
    	 <Download />
      </div>
    );
  }
}

export default LoneRent;