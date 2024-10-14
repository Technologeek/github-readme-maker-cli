import { BaseSection } from './BaseSection';

export class VisitorsSection extends BaseSection {
  generate(): string {
    return `
## 👀 Visitors Count
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=${this.username}.${this.username})
`;
  }
}
