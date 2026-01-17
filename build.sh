git clean -fdx;
dotnet tool install --global dotnet-serve;
dotnet publish -c Release -o ./publish;
dotnet serve -d ./publish/wwwroot;