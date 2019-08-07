const path = require("path");

/**
 * Verify conditions on the backup array
 * - All paths must be absolute
 * - All names must be unique
 *
 * @param {array} backup [
 *   { name: "config", path: "/usr/.raiden/config" },
 *   { name: "keystore", path: "/usr/.raiden/secret/keystore" }
 * ]
 */
function validateBackupArray(backup) {
  const pathsObj = {};
  for (const { name, path: _path } of backup) {
    if (pathsObj[name])
      throw Error(`Backup name ${name} is duplicated. They must be unique`);
    if (!path.isAbsolute(_path))
      throw Error(`Backup paths must be absolute, path: ${_path}`);
    if (path.parse(name).dir)
      throw Error(`Backup names cannot be a path, name: ${name}`);
    pathsObj[name] = true;
  }
}

module.exports = validateBackupArray;