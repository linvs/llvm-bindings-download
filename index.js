const { execSync } = require("child_process");

function install(version, count) {
    for(let i = 0; i < count; ++i) {
        execSync(`npm install llvm-bindings@${version}`);
        execSync("rm -rf node_modules");
        execSync("npm cache clean --force");
    }
    console.log(`已进行${count}次llvm-bindings@${version}的安装`);
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
];

const countBase = Math.ceil(Math.random() * 10)

for(let i = 0; i < versions.length; ++i) {
    install(versions[i], countBase * (i + 1))
}