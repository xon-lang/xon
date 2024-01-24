// import { IdNode } from '../id/id-node';
// import { NodeType } from '../node-type';
// import { parse } from '../../parser';

// test('a', () => {
//   const text = 'model Abstract';
//   const nodes = parse(text).root.children;
//   const tree = nodes[0] as DeclarationNode;

//   expect(nodes.length).toBe(1);

//   expect(tree.$).toBe(NodeType.DECLARATION);
//   expect(tree.modifier?.text).toBe('model');
//   expect((tree.assignee as IdNode)?.text).toBe('Abstract');
// });
