#!/usr/bin/env nu

print "🧹 Cleaning..."
^git clean -fdx

print "📦 Installing dotnet-serve..."
# We use 'try' so the script doesn't crash if it's already installed
try { ^dotnet tool install --global dotnet-serve }

print "🔨 Publishing..."
^dotnet publish -c Release -o ./publish

print "🚀 Serving..."
# Calculate the absolute path to the global tool
let dotnet_tool_bin = $"($env.HOME)/.dotnet/tools/dotnet-serve"

# Execute it directly
^$dotnet_tool_bin -d ./publish/wwwroot