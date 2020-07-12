# Visual Studio Code

[VS Code Docs](https://code.visualstudio.com/docs)

[VS Code Tips & Tricks](https://github.com/Microsoft/vscode-tips-and-tricks)

[Useful VS Code Keyboard Shortcuts](https://zellwk.com/blog/useful-vscode-keyboard-shortcuts/)

## Manage VS Code Extensions & Settings using PowerShell

Got to folder `'00 VS Code Settings'`

#### Dump to current Folder - dumpExtensions.ps1

```
code --list-extensions > ".\extensions.txt"
```

#### Import from current Folder - importExtensions.ps1

```
foreach($line in Get-Content ".\extensions.txt") {
    code --install-extension $line
}
```

## Recommended VS Code Settings

Copy settings.json & keybindings.json to `%APPDATA%\Code\User\settings.json`

### settings.json

```
{
  "workbench.startupEditor": "none",
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "git.enableSmartCommit": true,
  "window.zoomLevel": 1,
  "problems.autoReveal": false,
  "workbench.editor.enablePreview": false,
  "window.restoreWindows": "none",
  "files.hotExit": "off",
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "problems.decorations.enabled": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.formatOnSave": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "emmet.triggerExpansionOnTab": true,
  "workbench.editor.restoreViewState": false,
  "workbench.colorTheme": "Cobalt2",
  "liveServer.settings.donotShowInfoMsg": true,
  "bracket-pair-colorizer-2.colors": ["Red", "yellow", "Green", "Pink"],
  "csharp.format.enable": true,
  "csharpfixformat.sort.usings.enabled": true,
  "workbench.colorCustomizations": {
    "terminal.ansiBrightBlack": "#11b9b9"
  },
  "editor.tokenColorCustomizations": {
    "comments": "#47c7e7"
  },
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "diffEditor.ignoreTrimWhitespace": false,
  "git.confirmSync": false,
  "git-graph.fetchAvatars": true,
  "git.autofetchPeriod": 90,
  "git.autofetch": true
}
```

### keybindings.json

```
[
  // Save all
  {
    "key": "ctrl+s",
    "command": "workbench.action.files.saveAll"
  },
  // Stage current file
  {
    "key": "alt+s",
    "command": "git.stage"
  },
  // Delete line
  {
    "key": "ctrl+l",
    "command": "editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  //Open Terminal of Type using Shell Launcher Extension
  {
    "key": "ctrl+shift+numpad_subtract",
    "command": "shellLauncher.launch"
  }
]
```
