import expect from 'expect';
import * as courseAcions from './courseActions';
import * as types from './actionTypes';

// Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const course = {id: 'clean-code', title: 'Clean code'};
      const expetedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      };

      //act
      const action = courseAcions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expetedAction);
    });
  });
});
