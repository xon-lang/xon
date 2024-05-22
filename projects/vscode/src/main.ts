import {ExtensionContext, window} from 'vscode';
import {LANGUAGE_NAME} from './config';
import {configureCompletionFeature} from './feature/completion/completion-feature';
import {configureDefinitionFeature} from './feature/definition/definition-feature';
import {configureDiagnosticFeature} from './feature/diagnostic/diagnostic-feature';
import {configureFormattingFeature} from './feature/formatting/formatting-feature';
import {configureHighlightingFeature} from './feature/highlighting/highlighting-feature';
import {configureHoverFeature} from './feature/hover/hover-feature';
import {configureMoveToNewFileFeature} from './feature/refactoring/move-to-new-file-feature';
import {configureRenameFeature} from './feature/refactoring/rename-feature';
import {configureSignatureFeature} from './feature/signature/signature-feature';

export function activate(context: ExtensionContext) {
  const channel = window.createOutputChannel(LANGUAGE_NAME.toUpperCase());

  configureDiagnosticFeature(context, channel);
  configureFormattingFeature(context, channel);
  configureHighlightingFeature(context, channel);
  configureHoverFeature(context, channel);
  configureDefinitionFeature(context, channel);
  configureCompletionFeature(context, channel);
  configureRenameFeature(context, channel);
  configureMoveToNewFileFeature(context, channel);
  configureSignatureFeature(context, channel);
  // configureTranslatorFeature(context, channel);
}
