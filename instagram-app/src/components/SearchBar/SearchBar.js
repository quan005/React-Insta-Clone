import React from 'react';
import fuse from 'fuse.js';
import './SearchBar.css';
import Icons from './instagram-logos.png';
import Icons2 from './instagram-logos-2.png';

const instagramIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-105px -177px',
    height: '24px',
    width: '24px',
    display: 'block'
};

const instagramLogo = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 -146px',
    height: '29px',
    width: '103px',
    display: 'block'
};

const searchIcon = {
    backgroundImage: `url(${Icons2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-437px -344px',
    height: '10px',
    width: '10px',
    marginRight: '6px',
    verticalAlign: 'baseline',
    display: 'inline-block',
};

const inputSearchIcon = {
    backgroundImage: `url(${Icons2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-437px -344px',
    position: 'absolute',
    left: '11px',
    top: '9px',
    zIndex: '2',
    height: '10px',
    width: '10px',
    marginRight: '6px',
    verticalAlign: 'baseline',
    display: 'inline-block',
};

const searchClear = {
    backgroundImage: `url(${Icons2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-206px -402px',
    position: 'absolute',
    zIndex: '3',
    right: '-3px',
    top: '7px',
    height: '20px',
    width: '20px',
    marginRight: '6px',
    verticalAlign: 'baseline',
    display: 'inline-block',
}

const discoverIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-287px -26px',
    height: '24px',
    width: '24px'
};

const likesIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-156px -211px',
    height: '24px',
    width: '24px',
    marginLeft: '30px'
};

const profileIcon = {
    backgroundImage: `url(${Icons})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-27px -211px',
    height: '24px',
    width: '24px',
    marginLeft: '30px'
};


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.dummyData,
            username: props.username,
            search: props.query,
            inputPlaceHolder: true,
        }
    }

    inputChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    inputBlurHandler = event => {
        event.preventDefault();
        this.setState({inputPlaceHolder: true});
    };

    placeHolderClickHandler = event => {
        event.preventDefault();
        this.setState({inputPlaceHolder: false});
        document.getElementById("header-search").focus();
    };

    render() {

        // const fuseOptions = {
        //     shouldSort: true,
        //     threshold: 0.4,
        //     location: 0,
        //     distance: 50,
        //     maxPatternLength: 12,
        //     minMatchCharLength: 3,
        //     keys: [this.state.username]
        //   };

        // const fuse = new Fuse(this.state.post, fuseOptions);

        // const results = this.state.search ? fuse.search(this.state.search) : this.state.post;

        return (
            <div className="header">
                <div className="header-container" >

                    <div className="logo-container">
                        <span style={instagramIcon}></span>
                        <div className="vert-line"></div>
                        <span style={instagramLogo}></span>
                    </div>

                    <div className="input-container">
                        <input
                            type="text"
                            value={this.state.search}
                            placeholder="Search"
                            name="search"
                            id="header-search"
                            onBlur={this.inputBlurHandler}
                            onChange={this.state.search}
                        />

                        <span className={`${this.state.inputPlaceHolder === true ? 'hidden' : ''}`} style={inputSearchIcon}></span>
                        <div className={`${this.state.inputPlaceHolder === true ? 'hidden' : 'input-space'}`}></div>
                        <span className={`${this.state.inputPlaceHolder === true ? 'hidden' : ''}`} onClick={this.inputBlurHandler} role="button" style={searchClear}></span>

                        <div className={`${this.state.inputPlaceHolder === true ? 'input-placeholder' : 'hidden'}`} onClick={this.placeHolderClickHandler}>
                            <div className="input-placeholder-container">
                                <span className="search-icon" style={searchIcon}></span>
                                <span>Search</span>
                            </div>
                        </div>
                    </div>


                    <div className="menu-container">
                        <div className="icon-container">
                            <span style={discoverIcon}></span>
                            <span style={likesIcon}></span>
                            <span style={profileIcon}></span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SearchBar;