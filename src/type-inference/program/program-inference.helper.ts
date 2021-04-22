import { ProgramTree } from '../../tree/program/program.tree';
import { GenericsMap } from '../generics-map';
import { ProgramInference } from './program.inference';

export function getProgramInference(tree: ProgramTree, genericsMap: GenericsMap): ProgramInference {
  return new ProgramInference(tree, genericsMap);
}
