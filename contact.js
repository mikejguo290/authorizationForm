import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
      // event handler for for submission. checks whether the submitted password is equal to 'swordfish' and sets the state's authorized property to true if so.
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (
        <form action="#" onSubmit={this.authorize}>
            <input type="password" placeholder="password"/>
            <input type="submit"/>
        </form>
        );
    const ContactInfo=(
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );

    return (
      <div id="authorization">
        <h1>{this.state.auhorized===true? 'Contact': 'Enter the Password'}</h1>
        {this.state.authorized===true? ContactInfo : login }
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);