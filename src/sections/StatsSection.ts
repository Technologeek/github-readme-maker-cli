import { BaseSection } from "./BaseSection";

export class StatsSection extends BaseSection {
  generate(): string {
    return `
## GitHub Stats

![${this.username}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${this.username}&theme=${this.theme}&hide_border=false&include_all_commits=false&count_private=false)
`;
  }
}
