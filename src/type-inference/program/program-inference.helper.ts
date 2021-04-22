import { ProgramTree } from '../../tree/program/program.tree';
import { GenericsMap } from '../generics-map';
import { ProgramInference } from './program.inference';

export function fillProgramTypes(tree: ProgramTree, genericsMap: GenericsMap): void {
  new ProgramInference(tree, genericsMap).fillTypes();
}
