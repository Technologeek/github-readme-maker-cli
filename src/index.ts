#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';
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
  .option(
    '-t, --theme <theme>',
    chalk.magenta(`🎨 Theme for the README (${SUPPORTED_THEMES.join(', ')})`),
  )
  .option('-s, --stats', chalk.yellow('📊 Include GitHub stats'))
  .option('-k, --streaks', chalk.green('🔥 Include GitHub streaks'))
  .option('-r, --trophies', chalk.blue('🏆 Include GitHub trophies'))
  .option(
    '-m, --social <socials...>',
    chalk.cyan('🌐 Include social media links (format: platform:username)'),
  )
  .option(
    '-o, --output <path>',
    chalk.red('📄 Output file path'),
    './README.md',
  )
  .action(async options => {
    try {
      console.log(chalk.green('Generating README...'));

      const socialPlatforms: Record<string, string> = {};
      if (options.social) {
        for (const social of options.social) {
          const [platform, username] = social.split(':');
          if (platform && username) {
            socialPlatforms[platform.trim().toLowerCase()] = username.trim();
          }
        }
      }

      const { username, theme, stats, streaks, trophies } = options;

      const readmeGenerator = new ReadmeGenerator({
        username,
        theme,
        stats,
        streaks,
        trophies,
        socialPlatforms,
      });

      const readme = await readmeGenerator.generate();
      await writeReadmeFile(readme, options.output);

      console.log(
        chalk.green(`README generated successfully at ${options.output}`),
      );
    } catch (error) {
      console.error(chalk.red('Error generating README:'), error);
      process.exit(1);
    }
  });

// Parse arguments
program.parse(process.argv);

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  console.log(
    chalk.bgCyan.black('\n 🚀 GitHub Profile README Maker CLI 🚀 \n'),
  );
  program.outputHelp();
}
