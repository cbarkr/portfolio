import React from 'react';
import Typed from 'react-typed';

class HomeTitle extends React.Component {
    render(){
        return(
            <div className="type-name">
                <Typed strings={['username: cbarkr','name: callum_barker']} typeSpeed={80} backSpeed={65} loopCount={0} showCursor/>
            </div>
        )
    }
}

export default HomeTitle;