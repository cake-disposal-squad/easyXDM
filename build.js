var cmd = process.platform == "win32" ? "build.cmd" : "build.sh";
require("child_process").exec(cmd, function(err, stdout, stderr) {
    console.log(err,stdout,stderr);
    if (err) {
        process.stderr.write("Build error!");
        process.stderr.write(stderr);
        process.stdout.write(stdout);
        process.exit(err.code)
    } else {
        process.exit(0)
    }
})
