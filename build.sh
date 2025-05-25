git clean -fdx;
dotnet publish -c Release -o ./publish;
dotnet serve -d ./publish/wwwroot;