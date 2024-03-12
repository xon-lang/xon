import {ExtensionContext, window} from 'vscode';
import {LANGUAGE_NAME} from './config';
import {watchDocumentTree} from './document-tree';
import {configureCompletionFeature} from './feature/completion/completion-feature';
import {configureDefinitionFeature} from './feature/definition/definition-feature';
import {configureDiagnosticsFeature} from './feature/diagnostics/diagnostics-feature';
import {configureFormatterFeature} from './feature/formatter/formatter-feature';
import {configureHighlightingFeature} from './feature/highlighting/highlighting-feature';
import {configureHoverFeature} from './feature/hover/hover-feature';

export function activate(context: ExtensionContext) {
  const channel = window.createOutputChannel(LANGUAGE_NAME);

  watchDocumentTree(context, channel);

  configureDiagnosticsFeature(context, channel);
  configureFormatterFeature(context, channel);
  configureHighlightingFeature(context, channel);
  configureHoverFeature(context, channel);
  configureDefinitionFeature(context, channel);
  configureCompletionFeature(context, channel);
  // configureTranslatorFeature(context, channel);
}
