import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
		<header>
		          <div className="container">
		              <div className="row">
		                  <div className="col-lg-12">
		                      <img className="img-responsive" src="img/profile.png" alt="" />
		                      <div className="intro-text">
		                          <hr className="star-light"></hr>
		                          <span className="skills">Web Developer - Graphic Artist - User Experience Designer</span>
		                      </div>
		                  </div>
		              </div>
		          </div>
		      </header>
    );
  }
}
