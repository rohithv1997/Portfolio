
#!/usr/bin/env nu

let dotnet_base = "/home/linuxbrew/.linuxbrew/Cellar/dotnet"

print "Finding .so files to patch..."

let so_files = (
    glob $"($dotnet_base)/**/*.so"
)

if ($so_files | is-empty) {
    print "No .so files found. Is dotnet installed via Homebrew?"
    exit 1
}

print $"Found ($so_files | length) .so files. Patching..."

for file in $so_files {
    let result = (do { ^patchelf --clear-execstack $file } | complete)
    if $result.exit_code == 0 {
        print $"✓ ($file)"
    } else {
        print $"✗ Failed: ($file) — ($result.stderr)"
    }
}

print ""
print "Verifying dotnet..."
^dotnet --version
