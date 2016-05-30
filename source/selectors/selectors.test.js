import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Authro Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formated for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allan', firstName: 'Scott', lastName: 'Allan'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allan', text: 'Scott Allan'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
