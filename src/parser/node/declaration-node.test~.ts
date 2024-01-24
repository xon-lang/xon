// import { DeclarationNode } from './declaration/declaration-node';
// import { IdNode } from './id/id-node';
// import { NodeType } from './node-type';
// import { parse } from '../parser';
// import { is } from '../util/is';

// test('model abstract', () => {
//   const text = 'model Abstract';
//   const nodes = parse(text).root.children;
//   const tree = nodes[0] as DeclarationNode;

//   expect(nodes.length).toBe(1);

//   expect(tree.$).toBe(NodeType.DECLARATION);
//   expect(tree.modifier?.text).toBe('model');
//   expect((tree.assignee as IdNode)?.text).toBe('Abstract');
// });

// test('abc attribute', () => {
//   const text = `model Abstract: Base
//     abc: String`;
//   const nodes = parse(text).root.children;
//   const tree = nodes[0] as DeclarationNode;

//   expect(nodes.length).toBe(1);

//   expect(tree.$).toBe(NodeType.DECLARATION);
//   expect(tree.modifier?.text).toBe('model');
//   expect((tree.assignee as IdNode)?.text).toBe('Abstract');
//   expect((tree.type?.value as IdNode).text).toBe('Base');
//   expect(tree.attributes.length).toBe(1);
//   expect(tree.attributes.every((x) => is(x, NodeType.DECLARATION))).toBe(true);
// });

// test('has parameter', () => {
//   const text = 'prefix +(a: Integer)';
//   const nodes = parse(text).root.children;
//   const tree = nodes[0] as DeclarationNode;

//   expect(nodes.length).toBe(1);

//   expect(tree.$).toBe(NodeType.DECLARATION);
//   expect(tree.modifier?.text).toBe('prefix');
//   expect((tree.assignee as IdNode)?.text).toBe('+');
//   expect(tree.group?.items.length).toBe(1);
//   // todo add parameter check
//   // expect(tree.group?.items[0]..length).toBe(1);
// });

