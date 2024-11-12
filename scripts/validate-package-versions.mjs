import chalk from 'chalk';
import { readFile } from 'fs/promises';

/**
 * Function to check if any dependencies in package.json 
 * use the caret (^) character for versioning.
 */
async function validatePackageVersions() {
  try {
    // Read the contents of package.json
    const packageJson = JSON.parse(await readFile('package.json', 'utf-8'));

    // Extract dependencies and devDependencies (if they exist)
    const dependencies = packageJson.dependencies ?? {};
    const devDependencies = packageJson.devDependencies ?? {};

    /**
     * Helper function to check if any versions start with a caret (^)
     * @param {object} deps - The dependencies object to check
     * @returns {boolean} - Returns true if a caret (^) is found, otherwise false
     */
    const hasCaretVersion = (deps) =>
      Object.values(deps).some((version) => version.startsWith('^'));

    // Check both dependencies and devDependencies for caret versions
    if (hasCaretVersion(dependencies) || hasCaretVersion(devDependencies)) {
      console.error(chalk.red('❌ Error: Caret (^) character found in package versions.'));
      process.exit(1); // Exit with error code if caret (^) is found
    } else {
      console.info(chalk.green('✅ No caret (^) characters found in package versions.'));
    }
  } catch (error) {
    // Handle errors that occur during reading or parsing package.json
    console.error(chalk.red('❌ Error reading or parsing package.json:', error.message));
    process.exit(1);
  }
}

// Execute the validation function
validatePackageVersions();
