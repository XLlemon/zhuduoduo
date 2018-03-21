import React from 'react';
import '../../styles/router-style/knowapp.scss';

import Download from '../download/download.js';

class KnowApp extends React.Component {
	constructor(props){
		super(props)
		console.log('');
	}
  render() {
    return (
      <div className="knowapp">
    	了解App
    	{/*下载*/}
      	<Download />
      </div>
    );
  }
}

export default KnowApp;