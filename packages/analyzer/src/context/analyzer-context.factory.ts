import {$AnalyzerContext, AnalyzerContext, CharacterStream} from '#analyzer';

export function newAnalyzerContext(source: CharacterStream): AnalyzerContext {
  return {
    $: $AnalyzerContext(),
    source,
  };
}
