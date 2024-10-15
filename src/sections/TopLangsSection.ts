import { BaseSection } from './BaseSection';

export class TopLangsSection extends BaseSection {
  generate(): string {
    return `
    ## Top Languages

    [![${this.username}'s Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${this.username}&theme=${this.theme}&hide=c%23,html,css&layout=compact)](https://github-readme-stats.vercel.app/api/top-langs/?username=${this.username}&theme=${this.theme}&hide=c%23,html,css&layout=compact)
    `;
  }
}
