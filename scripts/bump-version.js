const fs = require('fs');
const path = require('path');
const semver = require('semver');

const args = require('minimist')(process.argv.slice(2));
const type = args.type || 'patch';

const pkgPath = path.resolve(__dirname, '..', 'package.json');
const appJsonPath = path.resolve(__dirname, '..', 'app.json');

function stripJson(content) {
  // remove /* */ comments
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  // remove // comments
  content = content.replace(/(^|[^:]|^)\/\/.*$/gm, '');
  // remove trailing commas before } or ]
  content = content.replace(/,\s*([}\]])/g, '$1');
  return content;
}

function readJson(p) {
  const raw = fs.readFileSync(p, 'utf8');
  return JSON.parse(stripJson(raw));
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

const pkg = readJson(pkgPath);
const appJson = readJson(appJsonPath);

if (!semver.valid(pkg.version)) {
  console.error('package.json version is not valid semver:', pkg.version);
  process.exit(1);
}

const newVersion = semver.inc(pkg.version, type);
if (!newVersion) {
  console.error('Failed to bump version');
  process.exit(1);
}

pkg.version = newVersion;
if (appJson.expo) appJson.expo.version = newVersion;

// bump android versionCode if present
if (appJson.expo && appJson.expo.android) {
  const vc = appJson.expo.android.versionCode || 1;
  appJson.expo.android.versionCode = vc + 1;
}

writeJson(pkgPath, pkg);
writeJson(appJsonPath, appJson);

console.log('Bumped version to', newVersion);
console.log('Updated android.versionCode to', appJson.expo && appJson.expo.android && appJson.expo.android.versionCode);
