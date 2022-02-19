const { execSync } = require("child_process");

function install(version, count) {
    for(let i = 0; i < count; ++i) {
        execSync(`npm install llvm-bindings@${version} --ignore-scripts`);
        execSync("rm -rf node_modules");
        execSync("npm cache clean --force");
    }
} 

const versions = [
  "0.0.3",
  "0.0.4",
  "0.1.0",
  "0.1.1",
  "0.1.2",
  "0.1.3",
  "0.1.4",
  "0.1.5",
  "0.1.6",
  "0.1.7",
  "0.1.8",
  "0.2.0",
  "0.2.1",
  "0.2.2",
  "0.2.3",
  "0.3.0",
  "0.3.1",
  "0.3.2",
  "0.3.3",
  "0.3.4"
];

const stats = new Array(versions.length);

for(let i = 0; i < versions.length; ++i) {
    install(versions[i], i + 1)
    stats[i] = {
        version: versions[i],
        count: i + 1,
    };
}

for(let stat of stats) {
    console.log(`已进行${stat.count}次llvm-bindings@${stat.version}的安装`);
}
