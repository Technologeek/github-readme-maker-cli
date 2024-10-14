# GPRM CLI: GitHub Profile README Maker

<p align="center">
  <img src="https://your-logo-url-here.png" alt="GPRM CLI Logo" width="200"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/gprm-cli"><img src="https://img.shields.io/npm/v/gprm-cli.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/gprm-cli"><img src="https://img.shields.io/npm/dm/gprm-cli.svg" alt="npm downloads"></a>
  <a href="https://github.com/your-username/gprm-cli/blob/main/LICENSE"><img src="https://img.shields.io/github/license/your-username/gprm-cli.svg" alt="license"></a>
</p>

GPRM CLI is a command-line interface tool for generating beautiful GitHub profile READMEs. It's the CLI version of the popular [GPRM web application](https://gprm.itsvg.in), bringing all the power and flexibility of GPRM to your terminal.

## 🚀 Features

- Generate comprehensive GitHub profile READMEs
- Include GitHub stats, streaks, trophies, and more
- Add social media links and funding options
- Showcase your tech stack
- Multiple themes support
- Easy to use CLI interface

## 🛠 Installation

You can install GPRM CLI globally using npm or yarn:

```bash
npm install -g gprm-cli
# or
yarn global add gprm-cli
```

## 🎨 Supported Themes

GPRM CLI supports the following themes:

- `default`
- `radical`
- `merko`
- `gruvbox`
- `tokyonight`
- `onedark`
- `cobalt`
- `synthwave`
- `highcontrast`
- `dracula`

## 🚦 Usage

Here's a basic example of how to use GPRM CLI:

```bash
gprm generate --username yourusername --stats --streaks
```

This will generate a README.md file in the current directory with your GitHub stats, streaks, trophies, and more.


For a more comprehensive README, you can use:

```bash
gprm generate \
  --username yourusername \
  --theme radical \
  --stats \
  --streaks \
  --trophies \
  --top-langs \
  --top-repos \
  --visitors \
  --social twitter:yourtwitter linkedin:yourlinkedin github:yourgithub instagram:yourinstagram \
  --tech "JavaScript TypeScript React Node.js Python Docker" \
  --funding paypal:yourusername ko-fi:yourusername github:yourgithub patreon:yourpatreon \
  --output ./custom-README.md
```

This command will generate a detailed README.md file that includes:
- GitHub username
- Custom theme (radical)
- GitHub stats
- GitHub streaks
- GitHub trophies
- Top languages
- Top contributed repositories
- Visitors count
- Social media links (Twitter, LinkedIn, GitHub, Instagram)
- Technologies/skills
- Funding links (PayPal, Ko-fi, GitHub Sponsors, Patreon)
- Custom output file path

To see all the available options, you can use:

```bash
gprm generate --help
```

## 🎛 Options

| Flag | Description |
|------|-------------|
| `-u, --username <username>` | Your GitHub username (required) |
| `-t, --theme <theme>` | Theme for the README |
| `-s, --stats` | Include GitHub stats |
| `-k, --streaks` | Include GitHub streaks |
| `-r, --trophies` | Include GitHub trophies |
| `-l, --top-langs` | Include top languages |
| `-p, --top-repos` | Include top contributed repositories |
| `-v, --visitors` | Include visitors count |
| `-m, --social <socials...>` | Include social media links (format: platform:username) |
| `-c, --tech <technologies...>` | Technologies you know (space-separated) |
| `-f, --funding <links...>` | Include funding links (format: platform:username) |
| `-o, --output <path>` | Output file path (default: ./README.md) |

## 🔮 Upcoming Features

- Interactive mode for easier README generation (Work in Progress)
- Support for `.gprmrc` configuration file (Work in Progress)

## 🛠️ Development

This project is bootstrapped with [Modern.js](https://modernjs.dev/) and uses [Biome](https://biomejs.dev/) for linting and formatting.

To set up the development environment:

```bash
git clone https://github.com/Technologeek/gprm-cli.git
cd gprm-cli
yarn install
```
To Build the project:

```bash
## Execute the build.
yarn build
## Execute the build in listening mode.
yarn build --watch
```

## 📝 Note

After generating your README, feel free to edit it further on GitHub to personalize it even more!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/Technologeek/gprm-cli/issues).

## 📜 License

This project is [MIT](https://github.com/Technologeek/gprm-cli/blob/main/LICENSE) licensed.

## 🙏 Acknowledgements

- [GPRM Web App](https://gprm.itsvg.in) - The original inspiration for this CLI tool
- [Modern.js](https://modernjs.dev/) - The web framework used
- [Biome](https://biomejs.dev/) - The toolchain for web projects used for linting and formatting
