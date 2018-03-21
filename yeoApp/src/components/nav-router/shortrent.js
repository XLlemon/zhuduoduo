import React from 'react';
import '../../styles/router-style/shortrent.scss';

import Download from '../download/download.js';


import img1 from '../../images/~ADADON4VZH(G@LAGP57)YX.png';
import img2 from '../../images/~(%7QF0VVRKY}KT929Q522P.png';
import img3 from '../../images/new1.jpg';
import img4 from '../../images/recruitLandlord_banner.jpg';

var image = [img1, img2, img3, img4]





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

    return (
      <div className="shortrent">
      	{/*轮播*/}
      	<div className='lunbo'>
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
	     	</div>
      	</div>
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