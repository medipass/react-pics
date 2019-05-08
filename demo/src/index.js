import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { Box, Flex } from 'fannypack';

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

class Demo extends Component {
  render() {
    return (
      <Flex flexDirection="column">
        <Box height="700px">
          <Pic>
            <source media="(max-width: 440px)" srcSet="https://images-ocaygwopou.now.sh/landing-hero-440.jpg" />
            <source media="(max-width: 768px)" srcSet="https://images-ocaygwopou.now.sh/landing-hero-768.jpg" />
            <source media="(max-width: 1024px)" srcSet="https://images-ocaygwopou.now.sh/landing-hero-1024.jpg" />
            <Image src="https://images-ocaygwopou.now.sh/landing-hero-1200.jpg" />
          </Pic>
        </Box>
        <Box height="700px">
          <Pic>
            <Image src="http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg" />
          </Pic>
        </Box>
        <Box height="700px">
          <Pic>
            <Image src="https://edit.co.uk/uploads/2016/12/Image-2-Alternatives-to-stock-photography-Thinkstock.jpg" />
          </Pic>
        </Box>
        <Box height="700px">
          <Pic>
            <Image src="https://ichef.bbci.co.uk/news/660/cpsprodpb/13F00/production/_95146618_bills.jpg" />
          </Pic>
        </Box>
        <Box height="700px">
          <Pic>
            <Image src="https://i.imgur.com/wBpvkA0.jpg" />
          </Pic>
        </Box>
        <Box height="700px">
          <Pic>
            <Image src="https://previews.123rf.com/images/gstockstudio/gstockstudio1502/gstockstudio150200424/36811165-choosing-the-best-ingredient-for-his-meal-thoughtful-young-african-chef-in-white-uniform-holding-bro.jpg" />
          </Pic>
        </Box>
      </Flex>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
