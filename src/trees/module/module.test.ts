import { parseFile } from '../../test-helper/test-parser';
import { ModuleParser } from './module.ast';

test.skip('module', () => {
  const tree = parseFile('src/trees/module/module.test.xon', ModuleParser)
});