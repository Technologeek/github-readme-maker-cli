import { BaseSection } from "./BaseSection";

export class StreaksSection extends BaseSection {
    generate(): string {
        return `
## GitHub Streak

[![${this.username}'s GitHub Streaks](https://github-readme-streak-stats.herokuapp.com?user=${this.username}&theme=${this.theme})](https://git.io/streak-stats)
`;
    }
}
