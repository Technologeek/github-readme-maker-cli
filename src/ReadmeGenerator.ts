import {
  type BaseSection,
  StatsSection,
  StreaksSection,
  TopLangsSection,
  TrophiesSection,
} from './sections';
import { generateFundingLink, socialIcons } from './utils/socialIcons';
import { type Theme, getRandomTheme, isValidTheme } from './utils/themes';

interface ReadmeOptions {
  username: string;
  theme?: string;
  stats?: boolean;
  streaks?: boolean;
  trophies?: boolean;
  topLangs?: boolean;
  socialPlatforms?: Record<string, string>;
  technologies?: string[];
  fundingLinks?: Record<string, string>;
}

type SectionKeys = 'stats' | 'streaks' | 'trophies' | 'topLangs';
export class ReadmeGenerator {
  private sections: BaseSection[] = [];
  private theme: Theme;
  private optionsMap: Record<
    SectionKeys,
    new (
      username: string,
      theme: Theme,
    ) => BaseSection
  > = {
    stats: StatsSection,
    streaks: StreaksSection,
    trophies: TrophiesSection,
    topLangs: TopLangsSection,
  };

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

  private generateSocialLinks(platforms: Record<string, string>): string {
    return Object.entries(platforms)
      .filter(([platform, _]) => platform in socialIcons)
      .map(([platform, username]) => socialIcons[platform](username))
      .join('\n');
  }

  private generateFundingLinks(platforms: Record<string, string>): string {
    return Object.entries(platforms)
      .map(([platform, username]) => generateFundingLink(platform, username))
      .join(' ');
  }

  private generateTechnologies(technologies: string[]): string {
    return technologies
      .map(tech => {
        //React Js -> react-js
        const formattedTech = tech.toLowerCase().replace(/\s+/g, '-');
        return `![${tech}](https://img.shields.io/badge/-${formattedTech}-05122A?style=flat&logo=${formattedTech})`;
      })
      .join(' ');
  }

  private initializeSections() {
    for (const [key, SectionClass] of Object.entries(this.optionsMap)) {
      if (this.options[key as SectionKeys]) {
        this.sections.push(new SectionClass(this.options.username, this.theme));
      }
    }
  }

  public async generate(): Promise<string> {
    try {
      let readme = `# Hi there 👋, I'm ${this.options.username}\n\n`;

      // Generate content for each section
      for (const section of this.sections) {
        readme += await section.generate();
      }
      //Add technologies if provided
      if (this.options.technologies && this.options.technologies.length > 0) {
        readme += '\n\n## Technologies I know\n\n';
        readme += this.generateTechnologies(this.options.technologies);
      }

      // social media links
      if (
        this.options.socialPlatforms &&
        Object.keys(this.options.socialPlatforms).length > 0
      ) {
        readme += '\n\n## Connect with me\n\n';
        readme += this.generateSocialLinks(this.options.socialPlatforms);
      }

      if (
        this.options.fundingLinks &&
        Object.keys(this.options.fundingLinks).length > 0
      ) {
        readme += '\n\n## Support my work\n\n';
        readme += this.generateFundingLinks(this.options.fundingLinks);
      }

      return readme;
    } catch (error) {
      console.error('Error generating README:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
}
