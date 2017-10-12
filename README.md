# stylelint-config-handsome

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![Peer Dependency Status][peer-dep-img]][peer-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpoppinlp%2Fstylelint-config-handsome.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpoppinlp%2Fstylelint-config-handsome?ref=badge_shield)

🤘Handsome stylelint config. Enforces strict and readable code.🤘

## Rules

This config aims to improve code readability which is good for team collaboration.
So it's a little bit strict but not too much.
You could find all rules [here](./.stylelintrc.yml).

## Install

By npm:

```shell
npm i stylelint-config-handsome --save-dev
```

By yarn:

```shell
yarn add -D stylelint-config-handsome
```

## Usage

Shareable configs are designed to work with the `extends` feature of stylelint config for or `stylelint` field in `package.json` file.
You can learn more about configuration on [stylelint official website](https://stylelint.io/user-guide/configuration/).

After install `stylelint-config-handsome` package, there's 2 ways to active it:

- by `package.json` file
- by stylelint configuration file

### `package.json` file

Add this to your `package.json` file:

```json
{
  "stylelint": {
    "extends": "stylelint-config-handsome"
  }
}
```

### Stylelint configuration file

Add this to your stylelint configuration file such as `.stylelintrc`:

```json
{
  "extends": "stylelint-config-handsome"
}
```

## Badge

Use this in one of your projects? Include one of these badges in your README file to let people know that your code is using the handsome style.

[![badge](https://img.shields.io/badge/stylelint-handsome-brightgreen.svg)](https://github.com/poppinlp/stylelint-config-handsome)

```markdown
[![badge](https://img.shields.io/badge/stylelint-handsome-brightgreen.svg)](https://github.com/poppinlp/stylelint-config-handsome)
```

[![flat badge](https://img.shields.io/badge/stylelint-handsome-brightgreen.svg?style=flat-square)](https://github.com/poppinlp/stylelint-config-handsome)

```markdown
[![flat badge](https://img.shields.io/badge/stylelint-handsome-brightgreen.svg?style=flat-square)](https://github.com/poppinlp/stylelint-config-handsome)
```

## History

- 0.1.0: Init version

[stylelint-shareable-config]:http://stylelint.org/docs/developer-guide/shareable-configs
[stylelint-config-file]:http://stylelint.org/docs/user-guide/configuring#configuration-file-formats

[ci-img]:https://img.shields.io/travis/poppinlp/stylelint-config-handsome.svg?style=flat-square
[ci-url]:https://travis-ci.org/poppinlp/stylelint-config-handsome

[cov-img]:https://img.shields.io/coveralls/poppinlp/stylelint-config-handsome.svg?style=flat-square
[cov-url]:https://coveralls.io/github/poppinlp/stylelint-config-handsome?branch=master

[dep-img]:https://img.shields.io/david/poppinlp/stylelint-config-handsome.svg?style=flat-square
[dep-url]:https://david-dm.org/poppinlp/stylelint-config-handsome

[dev-dep-img]:https://img.shields.io/david/dev/poppinlp/stylelint-config-handsome.svg?style=flat-square
[dev-dep-url]:https://david-dm.org/poppinlp/stylelint-config-handsome#info=devDependencies

[peer-dep-img]:https://img.shields.io/david/peer/webcomponents/generator-element.svg?style=flat-square
[peer-dep-url]:https://david-dm.org/poppinlp/stylelint-config-handsome#info=devDependencies

[npm-ver-img]:https://img.shields.io/npm/v/stylelint-config-handsome.svg?style=flat-square
[npm-dl-img]:https://img.shields.io/npm/dm/stylelint-config-handsome.svg?style=flat-square
[npm-lc-img]:https://img.shields.io/npm/l/stylelint-config-handsome.svg?style=flat-square
[npm-url]:https://www.npmjs.com/package/stylelint-config-handsome


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpoppinlp%2Fstylelint-config-handsome.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpoppinlp%2Fstylelint-config-handsome?ref=badge_large)