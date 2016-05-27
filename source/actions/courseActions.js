import * as types from './actionTypes';

export function createCourse(course) {
  return {
    type: types.CRATE_COURSE,
    course
  };
}
