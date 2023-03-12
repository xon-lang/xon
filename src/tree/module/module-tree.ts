import { String2 } from '~/lib/core';
import { SourceNode } from '~/tree/source/source-tree';

export interface Module {
  name: String2;
  location: String2;
  modules: Module[];
  sources: SourceNode[];
}
