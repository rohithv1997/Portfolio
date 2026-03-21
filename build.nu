#!/usr/bin/env nu

print "🧹 Cleaning..."
^git clean -fdx

print "📦 Installing dotnet-serve..."
^dotnet tool install --global dotnet-serve

print "🔨 Publishing..."
^dotnet publish -c Release -o ./publish

print "🚀 Serving..."
^dotnet serve -d ./publish/wwwroot
