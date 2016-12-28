'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.duydao.expandSelectionsToWord', () => {

    let editor = vscode.window.activeTextEditor;
    if ( !editor ) {
      return;
    };

    let {document, selections} = editor;
    if (selections.length === 1 || selections.every(selection => !!!selection.isEmpty)) {
      // run default if no empty selections
      return vscode.commands.executeCommand("editor.action.addSelectionToNextFindMatch");
    }
    editor.selections = selections.map(s => {
      if (s.isEmpty) {
        let { start, end } = document.getWordRangeAtPosition(s.active);
        let startPosition = new vscode.Position(start.line, start.character);
        let endPosition = new vscode.Position(start.line, end.character);
        return new vscode.Selection(startPosition, endPosition);
      }
      return s;
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {
  // nothing here ...
}