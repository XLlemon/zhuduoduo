import React from 'react';
import '../../styles/router-style/recruitlandlord.scss';

import Download from '../download/download.js';

class RecruitLandLord extends React.Component {
	constructor(props){
		super(props)
		console.log('');
	}
  render() {
    return (
      <div className="recruitlandLord">
    	招募房东
    	{/*下载*/}
      	<Download />
      </div>
    );
  }
}

export default RecruitLandLord;