import React from "react";
import { connect } from "react-redux";

const Footer = ({ footerPropsCount }) => (
  <h4>Repositórios favoritados : {footerPropsCount}</h4>
);

const mapToProps = state => ({ footerPropsCount: state.favorites.data.length });

export default connect(mapToProps)(Footer);
