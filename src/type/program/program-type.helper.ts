import { ProgramTree } from '../../tree/program/program.tree';
import { GenericsMap } from '../generics-map';
import { ProgramType } from './program.type';

export function fillProgramTypes(tree: ProgramTree, genericsMap: GenericsMap): void {
  new ProgramType(tree, genericsMap).fillTypes();
}
