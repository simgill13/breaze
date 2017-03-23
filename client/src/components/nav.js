import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router';


 class Nav extends React.Component {




    render() {
             return (
                <div className="nav-bar" >
                    <h3 className='logged-in-name'>{this.props.name}</h3>
                    <div className='inline1'>
                     <Link to={'/Vacations'} className='vacation-link'>All Vacations</Link>
                    </div>
                    <div className='inline1'>
                    <button type="submit" className='vacation-link'>Logout</button>
                    </div>
                    <div className='inline1'>
                      <img role="presentation" className="profile-pic" src={this.props.profilePicURL}/>
                    </div>

               </div>
        );
    }
}

const mapStateToProps = (state) => ({
 profilePicURL: state.profilePicURL,
 name: state.name
});
export default connect(mapStateToProps)(Nav)
