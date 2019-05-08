import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { keyframes } from 'styled-components';

import Pic from '../../src';

const fadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const Image = styled.img`
  animation: ${fadeIn} 300ms ease;
`;
const FixedPicture = styled(Pic)`
  height: 600px;
`;

class Demo extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FixedPicture>
          <source media="(max-width: 480px)" srcSet="https://medipass.netlify.com/images/landing-hero-480.jpg" />
          <source media="(max-width: 768px)" srcSet="https://medipass.netlify.com/images/landing-hero-768.jpg" />
          <source media="(max-width: 1024px)" srcSet="https://medipass.netlify.com/images/landing-hero-1024.jpg" />
          <source media="(max-width: 1200px)" srcSet="https://medipass.netlify.com/images/landing-hero-1200.jpg" />
          <Image src="https://medipass.netlify.com/images/landing-hero-1440.jpg" />
        </FixedPicture>
        <FixedPicture>
          <Image src="http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg" />
        </FixedPicture>
        <FixedPicture>
          <Image src="https://edit.co.uk/uploads/2016/12/Image-2-Alternatives-to-stock-photography-Thinkstock.jpg" />
        </FixedPicture>
        <FixedPicture>
          <Image src="https://ichef.bbci.co.uk/news/660/cpsprodpb/13F00/production/_95146618_bills.jpg" />
        </FixedPicture>
        <FixedPicture>
          <Image src="https://i.imgur.com/wBpvkA0.jpg" />
        </FixedPicture>
        <FixedPicture>
          <Image src="https://previews.123rf.com/images/gstockstudio/gstockstudio1502/gstockstudio150200424/36811165-choosing-the-best-ingredient-for-his-meal-thoughtful-young-african-chef-in-white-uniform-holding-bro.jpg" />
        </FixedPicture>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
