import { parseCode, testXonFIle } from '../../../test-helper';
import { SchemeDefinitionTree } from './scheme-definition.tree';

test('one item scheme', () => {
    const code = "scheme MyScheme:\n    a: string = '123'";
    const tree = parseCode(code, SchemeDefinitionTree);

    expect(tree.name).toBe('MyScheme');
    expect(tree.items[0].name).toBe('a');
    expect(tree.items[0].valueType).toBe('string');
    expect(tree.items[0].value.eval()).toBe('123');
});

// test('complex scheme', () => {
//     const code = 'scheme MyScheme2:\n    a:\n        b: num = 7 + 7\n        ccc = 7 * 7\n';
//     const tree = parseCode(code, SchemeDefinitionTree);

//     expect(tree.name).toBe('MyScheme2');
//     expect(tree.items.length).toBe(1);
//     expect(tree.items[0].items.length).toBe(2);
//     expect(tree.items[0].name).toBe('a');
//     expect(tree.items[0].items[0].name).toBe('b');
//     expect(tree.items[0].items[0].valueType).toBe('num');
//     expect(tree.items[0].items[0].value.eval()).toBe(7 + 7);
//     expect(tree.items[0].items[1].name).toBe('ccc');
//     expect(tree.items[0].items[1].valueType).toBeUndefined();
//     expect(tree.items[0].items[1].value.eval()).toBe(49);
// });

testXonFIle(SchemeDefinitionTree, tree => {
    expect(tree.name).toBe('SomeScheme');
    expect(tree.items.length).toBe(1);
    expect(tree.items[0].items.length).toBe(2);
    expect(tree.items[0].name).toBe('a');
    expect(tree.items[0].items[0].name).toBe('b');
    expect(tree.items[0].items[0].valueType).toBe('num');
    expect(tree.items[0].items[0].value.eval()).toBe(7 + 7);
    expect(tree.items[0].items[1].name).toBe('ccc');
    expect(tree.items[0].items[1].valueType).toBeUndefined();
    expect(tree.items[0].items[1].value.eval()).toBe(49);
})
