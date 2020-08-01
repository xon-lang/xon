import { parseCode } from '../../test-helper';
import { ImportsTree } from './imports.tree';

test('import all', () => {
    const code = "..'my-module': * as mm\n";
    const tree = parseCode(code, ImportsTree);
    expect(tree.isImportAll).toBe(true);
    expect(tree.alias).toBe('mm');
    expect(tree.path).toBe('../../my-module');
    expect(tree.members.length).toBe(0);
});

test('import all', () => {
    const code = '..lib.math.high: sqrt as s, log, ln, dnn as net \n';
    const tree = parseCode(code, ImportsTree);
    expect(tree.isImportAll).toBe(false);
    expect(tree.alias).toBeUndefined();
    expect(tree.path).toBe('../../lib/math/high');

    expect(tree.members.length).toBe(4);
    expect(tree.members[0].name).toBe('sqrt');
    expect(tree.members[0].alias).toBe('s');
    expect(tree.members[1].name).toBe('log');
    expect(tree.members[2].name).toBe('ln');
    expect(tree.members[3].name).toBe('dnn');
    expect(tree.members[3].alias).toBe('net');
});