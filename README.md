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

## Supported Technologies

GPRM supports a wide range of technologies. Here's a comprehensive list organized by category:

### Languages
| | | | |
|------------|------------|------------|------------|
| Apache Groovy | Assembly Script | C | C# |
| C++ | Clojure | Crystal | CSS3 |
| Dart | Elixir | Elm | Erlang |
| Fortran | Go/Golang | GraphQL | Haskell |
| HTML5 | Java | JavaScript | Julia |
| Kotlin | LaTeX | Lua | Markdown |
| Nim | Nix | Objective-C | OCaml |
| Octave | Org Mode | Perl | PHP |
| PowerShell | Python | R | ReScript |
| Ruby | Rust | Scala | Shell Script |
| Solidity | Swift | TypeScript | Windows Terminal |
| YAML | Zig | | |

### Frameworks & Libraries
| | | | |
|------------|------------|------------|------------|
| .NET | AdonisJS | Alpine.js | Anaconda |
| Angular | Angular.js | Ant Design | Apollo GraphQL |
| Astro | Aurelia | Backbone.js | Bootstrap |
| Buefy | Bun | Capacitor | Celery |
| Chakra UI | Chart.js | CodeIgniter | Context API |
| DaisyUI | Deno JS | Directus | Django |
| DjangoREST | Drupal | Electron.js | Ember |
| Expo | Express.js | FastAPI | Fastify |
| Flask | Flutter | Framer | Gatsby |
| Green Sock | Gulp | Haxe | Hugo |
| Ionic | Jasmine | Jest | Joomla |
| jQuery | JWT | Laravel | Less |
| MUI | Meteor JS | Mantine | NestJS |
| Next.js | Node.js | Nodemon | Node-RED |
| Nuxt.js | OpenCV | OpenGL | P5.js |
| PNPM | Pandas | Phoenix | Pinia |
| Playwright | Polymer | Prefect | Prisma |
| Processing | PyCharm | PyTorch | Qiskit |
| Quasar | RabbitMQ | Rails | React |
| React Native | React Query | React Router | ReactiveX |
| Redux | Remix | Rollup | ROS |
| Ruby on Rails | RxJS | RxDB | Sass |
| Scikit-learn | SciPy | Selenium | Semantic UI React |
| Sentry | Socket.io | Solid JS | Spring |
| Spring Boot | Strapi | Styled Components | Stylus |
| Svelte | Symfony | Tailwind CSS | Tauri |
| TensorFlow | Three.js | Thymeleaf | Uno CSS |
| Unity | Unreal Engine | Vaadin | Vim |
| Vite | Vue.js | Vuetify | Webpack |
| Windi CSS | Xamarin | Yarn | |

### Hosting & Cloud Platforms
| | | | |
|------------|------------|------------|------------|
| Alibaba Cloud | Azure | Cloudflare | Codeberg |
| Datadog | DigitalOcean | Firebase | Glitch |
| Google Cloud | Heroku | Linode | Netlify |
| Oracle | OpenStack | OVH | PythonAnywhere |
| Render | Scaleway | Vercel | Vultr |

### Databases & ORMs
| | | | |
|------------|------------|------------|------------|
| Amazon DynamoDB | Cassandra | Cockroach Labs | Couchbase |
| Firebase | InfluxDB | MariaDB | MusicBrainz |
| Microsoft SQL Server | MongoDB | MySQL | Neo4j |
| PlanetScale | Postgres | Realm | Redis |
| Single Store | SQLite | Supabase | SurrealDB |
| Teradata | Hibernate | Prisma | Sequelize |
| Quill | | | |

### Design Tools
| | | | |
|------------|------------|------------|------------|
| Adobe Suite | Affinity Designer | Affinity Photo | Aseprite |
| Blender | Canva | Dribbble | Figma |
| Framer | GIMP | Inkscape | InVision |
| Krita | Material Design | Proto.io | Sketch |
| Storybook | | | |

### DevOps & Version Control
| | | | |
|------------|------------|------------|------------|
| Apache (various) | Bitbucket | CircleCI | CodePen |
| Docker | ESLint | Elasticsearch | Gerrit |
| GitBook | Gitea | GitHub | GitHub Actions |
| GitHub Pages | GitLab | Gradle | Grafana |
| Gunicorn | Jenkins | Kubernetes | Mercurial |
| NGINX | Perforce Helix | Prometheus | Terraform |

### Other Tools & Platforms
| | | | |
|------------|------------|------------|------------|
| Airbnb | Alfred | Ansible | Aqua Sec |
| Arduino | Babel | Bitwarden | Cisco |
| CMake | CodeCov | Confluence | Crowdin |
| Espressif | Home Assistant | Homebridge | Jellyfin |
| Jira | Meta | Mosquitto | Notion |
| OpenSea | Packer | Pi-Hole | Plex |
| Postman | Power BI | Prezi | Rancher |
| Raspberry Pi | SonarLint | SonarQube | Splunk |
| Swagger | Tor | Trello | Twilio |
| Uber | Ubiquiti | Vagrant | WireGuard |
| XFCE | Zigbee | | |

When specifying technologies in your GPRM configuration, use the exact names as listed above. The search is case-insensitive, so you can use lowercase if you prefer.

For the most up-to-date list of supported technologies, refer to the `techData.ts` file in the GPRM source code.
