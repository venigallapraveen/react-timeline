import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import YouTubeCard from "../cards/YouTubeCard";

export default function YouTubeEvent(props) {
  const { date, id, name, text, marker, children } = props;

  return (
    <Event date={date} marker={marker}>
      <YouTubeCard date={date} id={id} name={name} text={text}>
        {children}
      </YouTubeCard>
    </Event>
  );
}

YouTubeEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node
};