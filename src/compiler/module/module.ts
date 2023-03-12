import { String2 } from '~/lib/core';
import { SourceNode } from '~/node/source/source-node';

export interface Module {
  name: String2;
  location: String2;
  modules: Module[];
  sources: SourceNode[];
}
