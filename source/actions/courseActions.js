import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function createCourse(course) {
  return {
    type: types.CRATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSES_SUCCESS,
    course
  };
}

export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSES_SUCCESS,
    course
  };
}

export function loadCourses() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
