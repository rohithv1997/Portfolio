### how to test this in developer desktop?

1. run `dotnet publish -c Release -o ./publish`. this will generate static files which can be hosted in webserver
2. run `dotnet serve -d ./publish/wwwroot --path-base Portfolio`. this will host the contents in localhost web server.

### notes

- `Portfolio` is the base path embedded in `wwwroot/index.html`. This has to be changed when github's remote
  repository name changes. this is required to ensure this site is hosted using github pages at
  `xxxxx.github.io/repository-name`

### package update
- To update outdated packages, run in sequence
- `dotnet list package --outdated` to identify outdated packages
- For each package, run `dotnet add package <Package>`
- If `dotnet serve` does not work, run `dotnet tool install --global dotnet-serve`