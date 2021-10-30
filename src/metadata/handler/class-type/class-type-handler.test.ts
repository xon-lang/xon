import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { parseDefinition } from '../../../tree/parse';
import { HandlerScope } from '../handler-scope';
import { ClassTypeHandler } from './class-type-handler';

test('integer', () => {
  const code = 'A:\n  p = 123';
  const tree = parseDefinition<ClassDefinitionTree>(code);
  expect(tree).toBeInstanceOf(ClassDefinitionTree);

  const scope = HandlerScope.fromCoreModule();
  const handler = new ClassTypeHandler(scope);
  handler.handle(tree);
  expect(handler.scope.findDefinition('A').name).toBe('A');
});
