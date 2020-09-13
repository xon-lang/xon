import { parse } from '../../parse';
import { ImportsTree } from './imports.tree';

test('import with many members', () => {
    const code = 'org/lib: sqrt as s, log, ln, dnn as net \n';
    const tree = new ImportsTree(parse(code).imports());
    expect(tree.scopeName).toBe('org');
    expect(tree.libName).toBe('lib');

    expect(tree.members.length).toBe(4);
    expect(tree.members[0].name).toBe('sqrt');
    expect(tree.members[0].alias).toBe('s');
    expect(tree.members[1].name).toBe('log');
    expect(tree.members[2].name).toBe('ln');
    expect(tree.members[3].name).toBe('dnn');
    expect(tree.members[3].alias).toBe('net');
});
