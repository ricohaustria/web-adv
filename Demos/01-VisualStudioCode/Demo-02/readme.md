# Manage VS Code Extensions using PowerShell

## Common Extensions

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

[C# for Visual Studio Code - powered by OmniSharp](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

[JS Refactor :: JS CodeFormer](https://marketplace.visualstudio.com/items?itemName=cmstead.jsrefactor)

## Dump to current Folder - dumpExtensions.ps1

```
code --list-extensions > ".\web-extensions.txt"
```

## Import from current Folder - importExtensions.ps1

```
foreach($line in Get-Content ".\web-extensions.txt") {
    code --install-extension $line
}
```