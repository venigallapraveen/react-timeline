import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  position: relative;
  zindex: 100;
  background-color: ${props => props.theme.marker.backgroundColor};
  border: ${props => props.theme.marker.border};
  border-radius: ${props => props.theme.marker.borderRadius};
  width: ${props => props.theme.marker.width};
  height: ${props => props.theme.marker.height};
`;

export default function Marker() {
  return <Container className="marker" />;
}

Marker.propTypes = {
  children: PropTypes.node,
};
