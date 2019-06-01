import React from 'react';

class ImgLoop extends React.Component {
    constructor() {
      super();
      this.state = {
          img1: true,
          img2: false,
          img3: false,
          img4: false,
          img5: false,
      };
      this.img1 = this.img1.bind(this);
      this.img2 = this.img2.bind(this);
      this.img3 = this.img3.bind(this);
      this.img4 = this.img4.bind(this);
      this.img5 = this.img5.bind(this);
    }

    img1 = () => {
        if (this.state.img1 === true) {
            this.className = 'login-img img-visible';
        } else if (this.state.img2 === true) {
            this.className = 'login-img img-below-visible';
        } else {
            this.className = 'login-img';
        }
    }

    img2 = () => {
        if (this.state.img2 === true) {
            this.className='login-img img-visible';
        } else if (this.state.img3 === true) {
            this.className='login-img img-below-visible';
        } else {
            this.className='login-img';
        }
    }

    img3 = () => {
        if (this.state.img3 === true) {
            this.className='login-img img-visible';
        } else if (this.state.img4 === true) {
            this.className='login-img img-below-visible';
        } else {
            this.className='login-img';
        }
    }

    img4 = () => {
        if (this.state.img4 === true) {
            this.className='login-img img-visible';
        } else if (this.state.img5 === true) {
            this.className='login-img img-below-visible';
        } else {
            this.className='login-img';
        }
    }

    img5 = () => {
        if (this.state.img5 === true) {
            this.className='login-img img-visible';
        } else if (this.state.img1 === true) {
            this.className='login-img img-below-visible';
        } else {
            this.className='login-img';
        }
    }

    render() {
        return (
            <div className="phone-margin-top">
                <img className={this.state.img1 ? 'img-visible login-img' : this.state.img2 ? 'img-below-visible login-img' : 'login-img'} src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" alt="insta-clone preview 1"/>
                <img className={this.state.img2 ? 'img-visible login-img' : this.state.img3 ? 'img-below-visible login-img' : 'login-img'} src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" alt="insta-clone preview 2"/>
                <img className={this.state.img3 ? 'img-visible login-img' : this.state.img4 ? 'img-below-visible login-img' : 'login-img'} src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" alt="insta-clone preview 3"/>
                <img className={this.state.img4 ? 'img-visible login-img' : this.state.img5 ? 'img-below-visible login-img' : 'login-img'} src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" alt="insta-clone preview 4"/>
                <img className={this.state.img5 ? 'img-visible login-img' : this.state.img1 ? 'img-below-visible login-img' : 'login-img'} src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" alt="insta-clone preview 5"/>
            </div>
        )
    }
}

export default ImgLoop;