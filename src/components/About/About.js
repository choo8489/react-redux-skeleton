import React from 'react';
import cxn from 'classnames';
import './About.css';

class About extends React.Component {
  render() {
    const {className, props} = this.props;
    return (
      <div className={cxn('About', className)} {...props}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}

export default About;
