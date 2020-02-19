import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'

import { initialState } from './reducers/carReducer'
import { carReducer } from './reducers/carReducer';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

export const store = createStore(carReducer);
console.log(store.getState())

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={props.removeItem}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.features} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log('this is state in app', state.additionalFeatures)
  return {
    key:state.additionalFeatures.id,
    carName:state.car.name,
    car:state.car,
    name:state.additionalFeatures.name,
    price:state.additionalFeatures.price,
    additionalPrice:state.additionalPrice,
    features:state.additionalFeatures,
  }
}

export default connect(mapStateToProps,{})(App)
