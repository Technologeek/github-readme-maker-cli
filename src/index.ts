#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { ReadmeGenerator } from './ReadmeGenerator';
import { writeReadmeFile } from './utils/fileUtils';
import { SUPPORTED_THEMES } from './utils/themes';

const program = new Command();

program
  .name('github-profile-readme-maker')
  .description('CLI to generate GitHub Profile READMEs')
  .version('1.0.0');

program
  .command('generate')
  .description(chalk.yellow('🚀 Generate a GitHub Profile README'))
  .requiredOption('-u, --username <username>', chalk.cyan('👤 GitHub username'))
  .option('-t, --theme <theme>', chalk.magenta(`🎨 Theme for the README (${SUPPORTED_THEMES.join(', ')})`))
  .option('-s, --stats', chalk.yellow('📊 Include GitHub stats'))
  .option('-k, --streaks', chalk.green('🔥 Include GitHub streaks'))
  .option('-r, --trophies', chalk.blue('🏆 Include GitHub trophies'))
  .option('-o, --output <path>', chalk.red('📄 Output file path'), './README.md')
  .action(async (options) => {
    console.log(chalk.green('Generating README...'));
    try {
      const generator = new ReadmeGenerator(options);
      const readme = generator.generate();
      await writeReadmeFile(readme, options.output);
      console.log(`README generated successfully at ${options.output}`);
    } catch (error) {
      console.error('Error generating README:', error);
    }
  });

// Parse arguments
program.parse(process.argv);

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  console.log(chalk.bgCyan.black('\n 🚀 GitHub Profile README Maker CLI 🚀 \n'));
  program.outputHelp();
}
