import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import MyProfilePicture from '../images/manju.jpg';

class LandingPage extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= { MyProfilePicture }
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Web Developer</h1>

            <hr/>

          <p> C# :: Asp.Net :: HTML/CSS :: Bootstrap :: JavaScript :: jQuery :: React :: MS-Sql </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;