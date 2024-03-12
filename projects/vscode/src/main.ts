import {ExtensionContext, window} from 'vscode';
import {LANGUAGE_NAME} from './config';
import {watchDocumentTree} from './document-tree';
import {configureCompletionFeature} from './feature/completion/completion-feature';
import {configureDefinitionFeature} from './feature/definition/definition-feature';
import {configureDiagnosticsFeature} from './feature/diagnostics/diagnostics-feature';
import {configureFormattingFeature} from './feature/formatting/formatting-feature';
import {configureHighlightingFeature} from './feature/highlighting/highlighting-feature';
import {configureHoverFeature} from './feature/hover/hover-feature';
import {configureRefactoringFeature} from './feature/refactoring/rename-feature';

export function activate(context: ExtensionContext) {
  const channel = window.createOutputChannel(LANGUAGE_NAME);

  watchDocumentTree(context, channel);

  configureDiagnosticsFeature(context, channel);
  configureFormattingFeature(context, channel);
  configureHighlightingFeature(context, channel);
  configureHoverFeature(context, channel);
  configureDefinitionFeature(context, channel);
  configureCompletionFeature(context, channel);
  configureCompletionFeature(context, channel);
  configureRefactoringFeature(context, channel);
  // configureTranslatorFeature(context, channel);
}
