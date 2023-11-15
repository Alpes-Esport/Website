<div id="top"></div>
<br />

<div align="center">
<a href="https://github.com/Chartreuse-Gaming/Website">
    <img src="src/assets/svg/logo.svg" alt="Logo" width="80" height="80">
</a>

<h3 align="center">Website</h3>

![GitHub deployments](https://img.shields.io/github/deployments/Alpes-Esport/Website/github-pages?label=Deployment)&nbsp;
![Website version](https://img.shields.io/github/package-json/v/Alpes-Esport/Website?label=Version)&nbsp;
![Project License](https://img.shields.io/github/license/Alpes-Esport/Website?label=License)&nbsp;
![Website build size](https://img.shields.io/badge/Build%20size-5.53%20MB-blue)

  <p align="center">
Website of the Alpes Esport association.
    <br />
    <a href="https://alpes-esport.fr/"><strong>alpes-esport.fr »</strong></a>
  </p>
</div>
<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#color-reference">Color Reference</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-locally">Run Locally</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#feedback">Feedback</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

## About The Project

Website of the association Alpes Esport presenting the organization as a whole and gathering all the past and
future events organized by it.

### Features

- Home page
- Timeline
- Carousel and galleries
- Rankings
- Presentation of the association
- Presentation of future and past events
- Twitch stream status

### Tech Stack

- [VueJS 3](https://vuejs.org/)
- [Sass](https://sass-lang.com/)
- [Vue-i18n](https://vue-i18n.intlify.dev/)
- [Vue-router](https://router.vuejs.org/)
- [Vue-my-photos](https://github.com/am283721/vue-my-photos)
- [Vue-observe-visibility](https://github.com/Akryum/vue-observe-visibility)
- [Disable-scroll](https://github.com/gilbarbara/disable-scroll#readme)
- [Fontawesome](https://fontawesome.com/)
- [SplideJS](https://splidejs.com/)
- [CountUp](https://github.com/inorganik/countUp.js)
- [Timeline](https://codepen.io/z-/pen/bwPBjY)

### Color Reference

| Color                    | Hex                                                                           | Description              |
| ------------------------ | ----------------------------------------------------------------------------- | ------------------------ |
| Text color               | ![#FFFFFFFF](https://via.placeholder.com/8/FFFFFFFF/FFFFFFFF.png) `#FFFFFFFF` | Titles and subtitles     |
| Subtext Color            | ![#E6E6E6FF](https://via.placeholder.com/8/E6E6E6FF/E6E6E6FF.png) `#E6E6E6FF` | Texts and description    |
| Footer text Color        | ![#B9B9B9FF](https://via.placeholder.com/8/B9B9B9FF/B9B9B9FF.png) `#B9B9B9FF` | Footer texts             |
| Green Color              | ![#23D940FF](https://via.placeholder.com/8/23D940FF/23D940FF.png) `#23D940FF` | Texts, decorations, etc. |
| Green Color (for button) | ![#1DB036FF](https://via.placeholder.com/8/1DB036FF/1DB036FF.png) `#1DB036FF` | Background for buttons   |
| Background Color         | ![#262626FF](https://via.placeholder.com/8/262626FF/262626FF.png) `#262626FF` | Global background        |

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

- Install [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/)

```bash
  curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  sudo apt-get install -y nodejs
```

### Run locally

1. Clone the project

```bash
  git clone https://github.com/Alpes-Esport/Website
  cd website
```

2. Install dependencies

```bash
  npm install
```

3. Start the server

```bash
  npm run serve
```

The server should start on [localhost:8080](http://localhost:8080/).

### Deployment

To deploy this project run

```bash
  npm run build
```

A new `dist` folder will appear containing the entire compiled website.

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [x] Home page
- [x] Carousel
- [x] Timeline
- [x] Ranking
- [ ] Gallery
- [ ] Twitch API integration
- [ ] Google Drive integration

<p align="right">(<a href="#top">back to top</a>)</p>

## Feedback

If you have any feedback, please reach out to us at [alpes.esport@gmail.com](mailto:alpes.esport@gmail.com).

<p align="right">(<a href="#top">back to top</a>)</p>

## Author

[@Minarox](https://www.github.com/Minarox)

<p align="right">(<a href="#top">back to top</a>)</p>
