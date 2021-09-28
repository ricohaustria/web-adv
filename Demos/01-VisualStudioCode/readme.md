# Visual Studio Code

[VS Code Docs](https://code.visualstudio.com/docs)

[VS Code Tips & Tricks](https://github.com/Microsoft/vscode-tips-and-tricks)

[Useful VS Code Keyboard Shortcuts](https://zellwk.com/blog/useful-vscode-keyboard-shortcuts/)

## Manage VS Code Extensions & Settings using PowerShell

### Dump to current Folder - dumpExtensions.ps1

```
code --list-extensions > ".\web-extensions.txt"
```

### Import from current Folder - importExtensions.ps1

```
foreach($line in Get-Content ".\web-extensions.txt") {
    code --install-extension $line
}
```

### Recommended VS Code Settings

Copy settings.json & keybindings.json to `%APPDATA%\Code\User\settings.json`

`settings.json`:

```json
{
    "workbench.startupEditor": "none",
    "git.enableSmartCommit": true,
    "problems.autoReveal": false,
    "workbench.editor.enablePreview": false,
    "editor.bracketPairColorization.enabled": true,
    "window.restoreWindows": "none",
    "files.hotExit": "off",
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "problems.decorations.enabled": false,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.openEditors.visible": 0,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "emmet.triggerExpansionOnTab": true,
    "workbench.editor.restoreViewState": false,
    "workbench.colorTheme": "Cobalt3",
    "workbench.colorCustomizations": {
        "terminal.background": "#6b7477",
        "terminal.foreground": "#e6ddd3",
        "terminalCursor.background": "#d33f12",
        "terminalCursor.foreground": "#ec1426",
        "terminal.ansiBlack": "#1D2021",
        "terminal.ansiBlue": "#0D6678",
        "terminal.ansiBrightBlack": "#ebe6e2",
        "terminal.ansiBrightBlue": "#0D6678",
        "terminal.ansiBrightCyan": "#8BA59B",
        "terminal.ansiBrightGreen": "#95C085",
        "terminal.ansiBrightMagenta": "#8F4673",
        "terminal.ansiBrightRed": "#FB543F",
        "terminal.ansiBrightWhite": "#FDF4C1",
        "terminal.ansiBrightYellow": "#FAC03B",
        "terminal.ansiCyan": "#8BA59B",
        "terminal.ansiGreen": "#95C085",
        "terminal.ansiMagenta": "#8F4673",
        "terminal.ansiRed": "#FB543F",
        "terminal.ansiWhite": "#A89984",
        "terminal.ansiYellow": "#FAC03B"
    },
    "liveServer.settings.donotShowInfoMsg": true,
    "csharp.format.enable": true,
    "terminal.integrated.cursorBlinking": true,
    "terminal.integrated.cursorStyle": "line",
    "diffEditor.ignoreTrimWhitespace": false,
    "git.confirmSync": false,
    "git.autofetchPeriod": 90,
    "git.autofetch": true,
    "shellLauncher.shells.windows": [
        {
            "shell": "C:\\Windows\\System32\\wsl.exe",
            "label": "WSL Bash"
        },
        {
            "shell": "C:\\Windows\\System32\\cmd.exe",
            "label": "CMD"
        },
        {
            "shell": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
            "label": "PowerShell"
        }
    ],
    "vs-kubernetes": {
        "vs-kubernetes.minikube-path.windows": "C:\\Users\\AlexanderPajer\\.vs-kubernetes\\tools\\minikube\\windows-amd64\\minikube.exe",
        "vs-kubernetes.helm-path.windows": "C:\\Users\\AlexanderPajer\\.vs-kubernetes\\tools\\helm\\windows-amd64\\helm.exe",
        "vs-kubernetes.draft-path.windows": "C:\\Users\\AlexanderPajer\\.vs-kubernetes\\tools\\draft\\windows-amd64\\draft.exe",
        "vs-kubernetes.kubectl-path.windows": "C:\\Users\\AlexanderPajer\\.vs-kubernetes\\tools\\kubectl\\kubectl.exe",
        "vscode-kubernetes.minikube-path.windows": "C:\\Users\\AlexanderPajer\\.vs-kubernetes\\tools\\minikube\\windows-amd64\\minikube.exe",
        "vscode-kubernetes.kubectl-path.windows": "C:\\Users\\AlexanderPajer\\.vs-kubernetes\\tools\\kubectl\\kubectl.exe",
        "vscode-kubernetes.helm-path.windows": "C:\\Users\\AlexanderPajer\\.vs-kubernetes\\tools\\helm\\windows-amd64\\helm.exe"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "typescript.preferences.quoteStyle": "single",
    "javascript.preferences.quoteStyle": "single",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "workbench.editor.revealIfOpen": true,
    "csharp.suppressDotnetInstallWarning": true,
    "csharp.suppressDotnetRestoreNotification": true,
    "csharp.suppressProjectJsonWarning": true,
    "csharp.suppressBuildAssetsNotification": true,
    "mssql.connections": [
        {
            "server": "localhost",
            "database": "",
            "authenticationType": "Integrated",
            "password": ""
        }
    ],
    "update.mode": "start",
    "update.enableWindowsBackgroundUpdates": false,
    "yaml.schemaStore.enable": false,
    "settingsSync.ignoredExtensions": [
        "teamsdevapp.ms-teams-vscode-extension",
        "ms-kubernetes-tools.vscode-kubernetes-tools",
        "mindaro.mindaro",
        "wallabyjs.wallaby-vscode"
    ],
    "todo-tree.general.tags": ["BUG", "HACK", "FIXME", "TODO", "XXX", "[ ]", "[x]"],
    "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
    "omnisharp.enableImportCompletion": true,
    "prettier.printWidth": 160,
    "prettier.tabWidth": 4,
    "redhat.telemetry.enabled": false,
    "rest-client.defaultHeaders": {
        "User-Agent": "vscode-restclient"
    },
    "prettier.embeddedLanguageFormatting": "off",
    "prettier.jsxSingleQuote": true,
    "prettier.singleQuote": true,
    "remote.SSH.remotePlatform": {
        "raspberrypi": "linux"
    },
    "azureFunctions.showProjectWarning": false,
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "security.workspace.trust.untrustedFiles": "open",
    "durableFunctionsMonitor.showWhenDebugSessionStarts": true,
    "window.zoomLevel": 2,
    "vscode-edge-devtools.mirrorEdits": true
}
```

`keybindings.json`:

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
