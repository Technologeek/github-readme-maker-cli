#!/usr/bin/env node

import { Command } from 'commander';
import { ReadmeGenerator } from './ReadmeGenerator';
import { writeReadmeFile } from './utils/fileUtils';
import { SUPPORTED_THEMES } from './utils/themes';

const program = new Command();

program
  .name('gprm')
  .description('GitHub Profile README Maker CLI')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate a GitHub Profile README')
  .requiredOption('-u, --username <username>', 'GitHub username')
  .option('-t, --theme <theme>', `Theme for the README (${SUPPORTED_THEMES.join(', ')})`)
  .option('-s, --stats', 'Include GitHub stats')
  .option('-k, --streaks', 'Include GitHub streaks')
  .option('-r, --trophies', 'Include GitHub trophies')
  .option('-o, --output <path>', 'Output file path', './README.md')
  .action(async (options) => {
    try {
      const generator = new ReadmeGenerator(options);
      const readme = generator.generate();
      await writeReadmeFile(readme, options.output);
      console.log(`README generated successfully at ${options.output}`);
    } catch (error) {
      console.error('Error generating README:', error);
    }
  });

program.parse(process.argv);

// If no arguments are provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
