import {$Model} from '../$';
import {String2} from '../../lib/types';
import {SemanticAnalyzer} from '../analyzer/semantic/semantic-analyzer';

export type Translator = $Model & {
  semanticAnalyzer: SemanticAnalyzer;

  translate(): String2;
};
