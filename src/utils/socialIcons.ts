type SocialIconFunction = (username: string) => string;

const socialIcons: Record<string, SocialIconFunction> = {
  behance: (username: string) =>
    `[![Behance](https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white)](https://behance.net/${username})`,

  facebook: (username: string) =>
    `[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white)](https://facebook.com/${username})`,

  twitter: (username: string) =>
    `[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/${username})`,

  discord: (username: string) =>
    `[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discordapp.com/users/${username})`,

  instagram: (username: string) =>
    `[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://instagram.com/${username})`,

  linkedin: (username: string) =>
    `[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${username})`,

  medium: (username: string) =>
    `[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@${username})`,

  mastodon: (username: string) =>
    `[![Mastodon](https://img.shields.io/badge/-MASTODON-%232B90D9?style=for-the-badge&logo=mastodon&logoColor=white)](https://mastodon.social/@${username})`,

  youtube: (username: string) =>
    `[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://youtube.com/@${username})`,

  reddit: (username: string) =>
    `[![Reddit](https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white)](https://reddit.com/user/${username})`,
};

export default socialIcons;
