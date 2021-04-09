import { parseType } from '../../../parse';
import { PlainTypeTree } from './plain-type.tree';

test('plain string type', () => {
  const code = 'String';
  const tree = parseType<PlainTypeTree>(code);
  expect(tree).toBeInstanceOf(PlainTypeTree);

  expect(tree.name).toBe('String');
});

// eslint-disable-next-line jest/no-commented-out-tests
// test('check inheritance Animal is Any, Cat is Animal, Lion is Cat', () => {
//   const animal = createPlainType('Animal');
//   const cat = createPlainType('Cat');
//   cat.inheritance = animal;
//   const Lion = createPlainType('Lion');
//   Lion.inheritance = cat;

//   expect(animal.is(typeAny)).toBe(true);
//   expect(animal.is(animal)).toBe(true);
//   expect(animal.is(cat)).toBe(false);
//   expect(animal.is(Lion)).toBe(false);

//   expect(cat.is(typeAny)).toBe(true);
//   expect(cat.is(animal)).toBe(true);
//   expect(cat.is(cat)).toBe(true);
//   expect(cat.is(Lion)).toBe(false);

//   expect(Lion.is(typeAny)).toBe(true);
//   expect(Lion.is(animal)).toBe(true);
//   expect(Lion.is(cat)).toBe(true);
//   expect(Lion.is(Lion)).toBe(true);
// });
