import React from 'react';
import { connect } from 'react-redux' // HOC
import { removeFeature } from '../actions/removeFeatureAction'
const AddedFeature = props => {
  console.log('this is second props',props )
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
     key:state.additionalFeatures.id,
  }
}

export default connect(mapStateToProps,{removeFeature})(AddedFeature)
