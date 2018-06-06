import { createStore } from 'redux';
import { action, sort, fucking } from '../actions/index';
import * as types from '../constants/index';
import myReducer from '../reducers/index';


const store = createStore(myReducer);
// execute job toogle status

store.dispatch(action());

store.dispatch(sort({ by: 'name', value: -1 }));
store.dispatch(fucking({ life: false, work: false }));
console.log(store.getState());
