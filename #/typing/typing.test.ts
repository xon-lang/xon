import {newTextData} from '#/common';
import {$} from '#/typing/src/$';

test('0', () => {
  expect(newTextData('0').$).toBe($.TextData);
});
