import { BaseSection } from './BaseSection';

export class TopReposSection extends BaseSection {
  generate(): string {
    return `
## 🏅 Top Contributed Repo
![](https://github-contributor-stats.vercel.app/api?username=${this.username}&limit=5&theme=${this.theme}&combine_all_yearly_contributions=true)
`;
  }
}
