import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { devDependenciesList } from './dev-dependencies-list.mjs';

// Load the `package.json` file from the current project directory
const packagePath = path.resolve('package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

/**
 * Function to sort dependencies or devDependencies objects alphabetically.
 * @param {object} deps - The dependencies object to be sorted
 * @returns {object} - The sorted dependencies object
 */
function sortDependencies(deps) {
  if (!deps) return {};
  return Object.keys(deps)
    .sort()
    .reduce((sorted, key) => {
      sorted[key] = deps[key];
      return sorted;
    }, {});
}

// Move packages to devDependencies if they match the list
function moveToDevDependencies(packageJson) {
  const { dependencies, devDependencies } = packageJson;

  if (!dependencies) return packageJson;

  for (const pkg of Object.keys(dependencies)) {
    if (devDependenciesList.includes(pkg)) {
      devDependencies[pkg] = dependencies[pkg]; // Move to devDependencies
      delete dependencies[pkg];
    }
  }

  return packageJson;
}

// Ensure `devDependencies` exists
if (!packageJson.devDependencies) {
  packageJson.devDependencies = {};
}

// Move packages and sort them
const updatedPackageJson = moveToDevDependencies(packageJson);
updatedPackageJson.dependencies = sortDependencies(updatedPackageJson.dependencies);
updatedPackageJson.devDependencies = sortDependencies(updatedPackageJson.devDependencies);

// Write the sorted data back to `package.json`
fs.writeFileSync(packagePath, JSON.stringify(updatedPackageJson, null, 2) + '\n');

console.log(chalk.green('✅ Dependencies and devDependencies have been sorted and updated successfully!'));
