import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { googleIcon, facebookIcon } from './AuthIcons';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(form) {
    return (e) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { action } = this.props;
    const { email, password } = this.state;
    action({ email, password });
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <div className="return-login">
          <Link to="/signup">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <h2>Log in to your account</h2>
        </div>
        <button type="button" className="google">
          {googleIcon}
          <span>Log in with Google</span>
        </button>
        <button type="button" className="facebook">
          {facebookIcon}
          <span>Log in with Facebook</span>
        </button>
        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <input type="text" placeholder="Email" onChange={this.handleChange('email')} />
        <input type="password" placeholder="Password" onChange={this.handleChange('password')} />
        <button type="submit" className="btn-blue">
          Log in
        </button>
        <small>
          New to Graphix?&nbsp;
          <Link to="/signup">Sign up</Link>
        </small>
      </form>
    );
  }
}

export default LoginForm;