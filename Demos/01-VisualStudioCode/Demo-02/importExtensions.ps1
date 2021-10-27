foreach ($line in Get-Content .\web-extensions.txt) {
    code --install-extension $line
}