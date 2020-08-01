import { parseCode } from '../../../test-helper';
import { ArrayExpressionTree } from '../../expression/array-expression/array-expression.tree';
import { AssignmentStatementTree } from './assignment-statement.tree';

test('one assignment', () => {
    const code = "a = 1, 2, 3, 'v'";
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.value).toBeInstanceOf(ArrayExpressionTree);
    expect(tree.singleAssigments.length).toBe(1);
    expect(tree.arrayAssginments.length).toBe(0);
    expect(tree.name).toBe('a');
    expect(
        tree.value
            .as<ArrayExpressionTree>()
            .items.map((x) => x.eval())
            .join()
    ).toBe('1,2,3,v');
});

test('id only list', () => {
    const code = 'a, b, c, d = [5 + 5]';
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.value).toBeInstanceOf(ArrayExpressionTree);
    expect(tree.singleAssigments.length).toBe(4);
    expect(tree.singleAssigments.map((x) => x.name).join()).toBe('a,b,c,d');
    expect(tree.singleAssigments[0].index).toBe(0);
    expect(tree.singleAssigments[1].index).toBe(1);
    expect(tree.singleAssigments[2].index).toBe(2);
    expect(tree.singleAssigments[3].index).toBe(3);
});

test('several equals', () => {
    const code = 'a,, b = ,c, d, = [5 + 5]';
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.value).toBeInstanceOf(ArrayExpressionTree);
    expect(tree.singleAssigments.length).toBe(4);
    expect(tree.singleAssigments.map((x) => x.name).join()).toBe('a,b,c,d');
    expect(tree.singleAssigments[0].index).toBe(0);
    expect(tree.singleAssigments[1].index).toBe(2);
    expect(tree.singleAssigments[2].index).toBe(1);
    expect(tree.singleAssigments[3].index).toBe(2);
});

test('id list and expression list', () => {
    const code = ",b, , , e, = 8, 5 + 5, 2^3, 'abcd', 8.9, 11, 7";
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.singleAssigments.length).toBe(2);
    expect(tree.singleAssigments.map((x) => x.name).join()).toBe('b,e');

    const arr = tree.value as ArrayExpressionTree;
    expect(arr).toBeInstanceOf(ArrayExpressionTree);
    expect(tree.singleAssigments[0].index).toBe(1);
    expect(arr.items[1].eval()).toBe(5 + 5);

    expect(tree.singleAssigments[1].index).toBe(4);
    expect(arr.items[4].eval()).toBe(8.9);
});

test('array id', () => {
    const code = ", , ...a, ..., ...z, b, c = 'x', 'y', 'z', 22, 33";
    const tree = parseCode(code, AssignmentStatementTree);
    expect(tree.singleAssigments.length).toBe(2);
    expect(tree.singleAssigments.map((x) => x.name).join()).toBe('b,c');

    const arr = tree.value as ArrayExpressionTree;
    expect(arr).toBeInstanceOf(ArrayExpressionTree);

    expect(tree.arrayAssginments.length).toBe(3);
    expect(tree.startArraysIndex).toBe(2);
    expect(tree.endArraysIndex).toBe(-2);
    expect(tree.arrayAssginments[0]).toBe('a');
    expect(tree.arrayAssginments[1]).toBe('');
    expect(tree.arrayAssginments[2]).toBe('z');
});
