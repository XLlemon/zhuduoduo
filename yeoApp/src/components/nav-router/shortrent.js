import React from 'react';
import '../../styles/router-style/shortrent.scss';

import Lunbo from '../lunbo/lunbo.js'

import Download from '../download/download.js';








import t1 from '../../images/trust-community-icon1.jpg';
import t2 from '../../images/trust-community-icon2.jpg';
import t3 from '../../images/trust-community-icon3.jpg';

  	let tt=[
  		{text1:t1,text2:'宽敞舒适，厨卫齐全'},
  		{text1:t2,text2:'WIFI无线，洁净舒心'},
  		{text1:t3,text2:'邂逅美好，本地生活'},
  	]


class ShortRent extends React.Component {
	constructor(props){
		super(props)
		console.log('');
	};
  render() {

    return (
      <div className="shortrent">
      	{/*轮播*/}
      	<Lunbo />
      	{/*社区*/}
      	<div className='community section' id='com-box'>
      		<h4 className='title-s1'>以品质为基础的社区</h4>
      		<ul className='c-list clearfix'>
	      		{
	      			tt.map((item,index)=>{
	      				return(
	      					<li key={index}>
			      				<div className='list-box'>
			      					<img className='list-time' src={item.text1} />
			      					<p className='text'>{item.text2}</p>
			      				</div>
			      			</li>
	      				)
	      			})
	      		}	
      		</ul>
      	</div>
      	{/*配置设施*/}
      	<div className='facilities' id='f-box'>
      		<div className='fac-box section' id='f-s'>
      			<ul className='f-list clearfix' id='f-l-l'>
      				<li>
      					<div className='f-icon icon1'>
      						<p className='text-b'>多人多天更划算</p>
      						<p className='text-s'>能做饭能洗衣，能带宠物能party</p>
      					</div>
      				</li>
      				<li>
      					<div className='f-icon icon2'>
      						<p className='text-b'>更具家庭氛围</p>
      						<p className='text-s'>在住多多，享受家的温馨和舒适</p>
      					</div>
      				</li>
      				<li>
      					<div className='f-icon icon3'>
      						<p className='text-b'>比酒店更实惠</p>
      						
      						<p className='text-s'>比等价酒店空间大，设施更齐全</p>
      					</div>
      				</li>
      				<li>
      					<div className='f-icon icon4'>
      						<p className='text-b'>新奇当地体验</p>
      						<p className='text-s'>风格迥异，体验新奇，融入当地</p>
      					</div>
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

export default ShortRent;