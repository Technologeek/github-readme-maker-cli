import { BaseSection } from './BaseSection';

export class VisitorsSection extends BaseSection {
  generate(): string {
    return `
## 👀 Profile Views

[![](https://visitcount.itsvg.in/api?id=${this.username}&icon=0&color=2)](https://visitcount.itsvg.in)
`;
  }
}
