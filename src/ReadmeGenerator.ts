import { BaseSection, StatsSection, StreaksSection, TrophiesSection } from './sections';
import { Theme, getRandomTheme, isValidTheme } from './utils/themes';

interface ReadmeOptions {
  username: string;
  theme?: string;
  stats?: boolean;
  streaks?: boolean;
  trophies?: boolean;
}

export class ReadmeGenerator {
  private sections: BaseSection[] = [];
  private theme: Theme;

  constructor(private options: ReadmeOptions) {
    this.theme = this.resolveTheme(options.theme);
    this.initializeSections();
  }

  private resolveTheme(theme?: string): Theme {
    if (theme && isValidTheme(theme)) {
      return theme;
    }
    return getRandomTheme();
  }

  private initializeSections() {
    if (this.options.stats) {
      this.sections.push(new StatsSection(this.options.username, this.theme));
    }
    if (this.options.streaks) {
      this.sections.push(new StreaksSection(this.options.username, this.theme));
    }
    if (this.options.trophies) {
      this.sections.push(new TrophiesSection(this.options.username, this.theme));
    }
  }

  generate(): string {
    let readme = `# Hi there! 👋 I'm ${this.options.username}\n\n`;
    readme += `Theme: ${this.theme}\n\n`;

    for (const section of this.sections) {
      readme += section.generate();
    }

    return readme;
  }
}
