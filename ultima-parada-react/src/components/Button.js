import React from 'react';

class Button extends React.Component {
  render() {
    const { foodCategory, buttonTitle } = this.props;

    return (
      <a
        href={ foodCategory }
        className="button"
      >
        { buttonTitle }
      </a>
    )
  }
}


export default Button;
