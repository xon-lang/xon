import * as glob from 'glob';
import * as path from 'path';
import { parseSourceFile } from '../../tree/parse';
import { HandlerScope } from './handler-scope';

export function moduleHandler(moduleDir: string, scope: HandlerScope) {
  const globPath = path.resolve(moduleDir, '**/*.xon');
  const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

  const definitions = sources.flatMap((x) => x.definitions);
  const attributes = sources.flatMap((x) => x.attributes);

  
}
