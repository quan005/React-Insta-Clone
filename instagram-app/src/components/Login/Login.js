import React from 'react';
import LoginPic from './login-pic.png';
import Icons2 from '../../components/SearchBar/instagram-logos-2.png';
import apple from './apple-store.png';
import play from './play-store.png';

const contentLeft = {
    WebkitAlignSelf: 'center',
    msFlexItemAlign: 'center',
    alignSelf: 'center',
    backgroundImage: `url(${LoginPic})`,
    backgroundPosition: '0 0',
    backgroundSize: '454px 618px',
    WebkitFlexBasis: '454px',
    msFlexPreferredSize: '454px',
    flexBasis: '454px',
    height: '618px',
    marginLeft: '-35px',
    marginRight: '-15px',
}

const loginLogo = {
    backgroundImage: `url(${Icons2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-98px -150px',
    height: '51px',
    width: '175px',
    margin: '22px auto 12px',
}

const facebookLogo = {
    backgroundImage: `url(${Icons2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-382px -399px',
    height: '16px',
    width: '16px',
    display: 'inline-block',
    marginRight: '8px',
    position: 'relative',
    top: '3px',
}


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        username: '',
        password: '',
        show: false,
        // pics: [{Image: "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"},
        // {Image: "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"},
        // {Image: "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"},
        // {Image: "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"},
        // {Image: "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"},
        // ],
    };
  }

  inputHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  loginHandler = event => {
    event.preventDefault();
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
    } else {
        window.localStorage.setItem('user', this.state.username);
    }
    window.location.reload();
  }

  showHandler = event => {
    event.preventDefault();
    if (this.state.show === false) {
        this.setState({show: true})
    } else {
        this.setState({show: false})
    }
  }

  render() {

    return (
      <div>
          <section className="login-section">
              <main className="main-content">
                  <article className="content-container">
                      <div style={contentLeft}>
                          <div className="phone-margin-top">
                              {this.state.pics}
                          </div>
                      </div>

                      <div className="content-right">
                          <div className="login-container">
                              <div style={loginLogo}></div>

                              <div className="form-container">
                                  <form>
                                      <div className="form-margin-top"></div>

                                      <div className="form-input-container">
                                          <div className="input-size">
                                              <div className="input-inner">
                                                  <label>Phone number, username, or email</label>
                                                  <input
                                                    aria-required="true" 
                                                    autoCapitalize="off" 
                                                    autoCorrect="off" 
                                                    maxLength="75" 
                                                    name="username" 
                                                    type="text" 
                                                    value={this.state.username}
                                                    onChange={this.inputHandler}
                                                  />
                                              </div>
                                          </div>
                                      </div>

                                      <div className="form-input-container">
                                          <div className="input-size">
                                              <div className="password-input-inner">
                                                  <label>Password</label>
                                                  <input
                                                    aria-required="true" 
                                                    autoCapitalize="off" 
                                                    autoCorrect="off"
                                                    name="password" 
                                                    type={this.state.show === false ? "password" : "text"} 
                                                    value={this.state.password}
                                                    onChange={this.inputHandler}
                                                  />
                                              </div>
                                              <div className="show-outter-container">
                                                  <div className="show-inner-container">
                                                      <button 
                                                        type="button"
                                                        onClick={this.showHandler}
                                                      >Show</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      <div className="login-button-container">
                                          <button type="submit" onClick={this.loginHandler}>
                                              <div className="login">Log In</div>
                                          </button>
                                      </div>

                                      <div className="separator-container">
                                          <div className="separator-line"></div>
                                          <div className="or">OR</div>
                                          <div className="separator-line"></div>
                                      </div>

                                      <div className="facebook-login-container">
                                          <button>
                                              <span style={facebookLogo}></span>
                                              <span className="facebook-login">Log in with facebook</span>
                                          </button>
                                      </div>

                                      <p className="form-p">Forgot password?</p>
                                  </form>
                              </div>
                          </div>

                          <div className="signup-container">
                              <div className="p-container">
                                  <p>Don't have an account? <strong>Sign up</strong></p>
                              </div>
                          </div>

                          <div className="download-container">
                              <p>Get the app.</p>
                              <div className="store-img-container">
                                  <img className="apple-store" src={apple} alt="available on the app store" />
                                  <img className="play-store" src={play} alt="available on the play store" />
                              </div>
                          </div>
                      </div>
                  </article>
              </main>
          </section>
      </div>
    );
  }
}

export default Login;
