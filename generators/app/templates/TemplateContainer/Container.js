import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// todo: import actions, constants, and selectors here
import Component from './Component';

const ComponentFn = ({ }) => (
  <Component />
);

ComponentFn.propTypes = {
  // todo: add propTypes
};

const mapStateToProps = state => ({
  // todo: use selectors here
});

const mapDispatchToProps = dispatch => ({
  // todo: use bindActionCreators here
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentFn);
