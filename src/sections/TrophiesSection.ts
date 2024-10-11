import { BaseSection } from "./BaseSection";

export class TrophiesSection extends BaseSection {
    generate(): string {
        return `
    ## GitHub Trophies

    ![${this.username}'s Trophies}](https://github-profile-trophy.vercel.app/?username=${this.username}&theme=${this.theme}&no-frame=false&no-bg=true&margin-w=4)
    `;
    }
}
