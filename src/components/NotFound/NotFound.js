import React, {Component} from 'react';
import cxn from 'classnames';

class NotFound extends Component {
  render() {
    const {className, ...props} = this.props;
    return (
      <div className={cxn(className, 'NotFound')} {...props}>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}

export default NotFound;
