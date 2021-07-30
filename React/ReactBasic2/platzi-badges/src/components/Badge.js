import React from 'react';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {

  render() {

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="log de la conferencia" />
        </div>

        <div className="Badge__section-name ">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt=""
            className="Badge__avatar"
          />
          <h1>{ this.props.firstName } <br /> { this.props.lastName }</h1>
        </div>

        <div className="Badge__section-info">
          <h3>Fronted Engineer</h3>
          <div>@mateooviedo</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;
