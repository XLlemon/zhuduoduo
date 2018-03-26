import React from 'react';
import './lunbo.scss';

import img1 from '../../images/~ADADON4VZH(G@LAGP57)YX.png'
import img2 from '../../images/~(%7QF0VVRKY}KT929Q522P.png'
import img3 from '../../images/new1.jpg'
import img4 from '../../images/recruitLandlord_banner.jpg'

var image = [img1, img2, img3, img4]

class Lunbo extends React.Component {
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
    	<div className='lunbo' id='zhubaCode'>
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
    );
  }
}

export default Lunbo;