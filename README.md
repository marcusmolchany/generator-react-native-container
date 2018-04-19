# generator-react-native-container [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator for creating react-native container folders.

This generator generates an opinionated react-native container folder.

The generated folder structure is as follows:

```
TemplateContainer/
├── Component.js
├── Container.js
└── index.js
```

The generated files are based on the template in [`app/templates/TemplateContainer`](https://github.com/marcusmolchany/generator-react-native-container/tree/master/generators/app/templates/TemplateContainer).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-native-container using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-native-container
```

Then generate your new react-native container folder:

```bash
yo react-native-container ContainerName  # ContainerName will be the name of your new container's folder
```

## License

MIT


[npm-image]: https://badge.fury.io/js/generator-react-native-container.svg
[npm-url]: https://npmjs.org/package/generator-react-native-container
[travis-image]: https://travis-ci.org/marcusmolchany/generator-react-native-container.svg?branch=master
[travis-url]: https://travis-ci.org/marcusmolchany/generator-react-native-container
[daviddm-image]: https://david-dm.org/marcusmolchany/generator-react-native-container.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/marcusmolchany/generator-react-native-container
