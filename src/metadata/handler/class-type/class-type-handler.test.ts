import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { parseDefinition } from '../../../tree/parse';
import { ClassTypeMetadata } from '../../type/id-type/class-type/class-type-metadata';
import { HandlerScope } from '../handler-scope';
import { ClassTypeHandler } from './class-type-handler';

test('class type', () => {
  const code = 'A:\n  p = 123';
  const tree = parseDefinition<ClassDefinitionTree>(code);
  expect(tree).toBeInstanceOf(ClassDefinitionTree);

  const scope = HandlerScope.fromCoreModule();
  const handler = new ClassTypeHandler(scope);
  handler.handle(tree);
  
  const classTypeMetadata = handler.scope.findIdType('A') as ClassTypeMetadata
  expect(classTypeMetadata).toBeInstanceOf(ClassTypeMetadata);
  
  expect(classTypeMetadata.name).toBe('A');
  expect(classTypeMetadata.properties.length).toBe(1);
  expect(classTypeMetadata.properties[0].).toBe('A');
});
