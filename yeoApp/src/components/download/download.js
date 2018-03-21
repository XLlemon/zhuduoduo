import React from 'react';
import './download.scss';

import img0 from '../../images/zhudd-code.png';

class Download extends React.Component {
	constructor(props){
		super(props)
		console.log('');
	}
  render() {
    return (
    	<div className='butexbox' id='zhubaCode'>
     		<div className='butex section' id='butex'>
     				<img src={img0} alt="" />
     		</div>
     		<div className='but_a' id='but_a'>
     			<a href=""><i className='i1'></i></a>
     				<span id='split'>&nbsp;&nbsp;</span>
     			<a href=""><i className='i2'></i></a>
     		</div>
     	</div>
    );
  }
}

export default Download;