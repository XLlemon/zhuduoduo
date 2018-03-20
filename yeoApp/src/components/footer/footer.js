import React,{ Component } from 'react';
import '../../styles/footer.scss';


class Footer extends Component{
	constructor(props){
		super(props)
		console.log('');
	}
	render(){
		return (
			<div className="footer">
				<div className='footer-inner'>
					<p>
						<span className='phone'>联系电话：023-67728163</span>
					</p>
					<p>重庆住多多科技有限责任公司  网站备案/许可证号： 渝ICP备17011499号-1</p>
				</div>
			</div>
		)
	}
}
export default Footer;