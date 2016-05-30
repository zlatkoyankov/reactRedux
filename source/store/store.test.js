import expect from 'expect';
import { createStore } from 'redux';
import rootREducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating coureses', () => {
    //arrange
    const store = createStore(rootREducer, initialState);
    const course = {
      title: "Clean Code"
    };

    //act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };
    expect(actual).toEqual(expected);
  });
});
