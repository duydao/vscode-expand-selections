# vscode - expand selections to word

## Changelog:

0.1.0:
- Adds the ability to expand the selections to the current word.
- only expands empty (zero-length) selections
- Calls editor.action.addSelectionToNextFindMatch on single selections / no empty selections
- replaces Cmd + D / Ctrl + D

## Installation

npm install -g vsce
npm install
vsce package
code --install-extension vscode-cmd-d-0.1.0.vsix (or vscode -> extensions -> install from VSIX)

## TODO

- make keybinding optional

## License

MIT