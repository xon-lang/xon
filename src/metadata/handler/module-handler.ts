import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { parseSourceFile } from '../../tree/parse';
import { ModuleMetadata } from '../module-metadata';
import { FunctionTypeMetadata } from '../type/function/function-type-metadata';
import { IdTypeMetadata } from '../type/id/id-type-metadata';
import { HandlerScope } from './handler-scope';

export function moduleHandler(moduleDir: string, scope: HandlerScope): ModuleMetadata {
  const globPath = path.resolve(moduleDir, '**/*.xon');
  const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

  for (const definition of sources.flatMap((x) =>
    x.definitions.map((x) => x as ClassDefinitionTree),
  )) {
    scope.set(
      definition.id.text,
      new IdTypeMetadata(definition.id.text, definition.typeParameters.length),
    );
  }
  for (const definition of sources.flatMap((x) => x.definitions)) {
    const type = scope.get(definition.id.text) as IdTypeMetadata;
    type.setInit(new FunctionTypeMetadata([], type));
  }

  // for (const attribute of sources.flatMap((x) => x.attributes)) {
  //   scope.set(attribute.id.text, );
  // }

  return new ModuleMetadata(scope.declarations);
}
