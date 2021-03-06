# Boilerplate

Boilerplate is for:

- organizing the source code files in maintainable physical folders.
- nodejs package.json
- optional typescript related config
- tooling related config
  - webpack

## node and webpack

Software engineer deals with more work than developer. The source code needs to be optionally transpiled, compiled, built, tested, packaged, deployed.

With tooling support from packages, the code files should be easily transpiled, tested, built, packaged.

Build is turning the source code into deployable packages. For example, in windows, source code is compiled into exe and dll files which are deployed on other PCs which has .net framework installed. If you have different branches of source code and configurations (database connection string, other network dependencies), the source code can be easily packaged.

package.json for npm

```json
{
  "name": "phaser3-project-template-3",
  "version": "1.0.0",
  "description": "A Phaser 3 Project Template",
  "main": "src/index.js",
  "scripts": {
    "build": "webpack",
    "start": "npm run build && webpack-dev-server --port=8000"
  },
  "repository": {
    "type": "git",
    "url": "git+https://scottwestover@bitbucket.org/creativerendering/phaser3-template.git"
  },
  "license": "MIT",
  "licenseUrl": "http://www.opensource.org/licenses/mit-license.php",
  "bugs": {
    "url": "https://github.com/photonstorm/phaser3-project-template/issues"
  },
  "homepage": "https://github.com/photonstorm/phaser3-project-template#readme",
  "devDependencies": {
    "webpack-dev-server": "^2.11.0",
    "webpack": "^3.4.1",
    "raw-loader": "^0.5.1",
    "phaser": "^3.3.0"
  }
}
```

webpack.config.js

```js
'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'project.bundle.js'
  },

  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    })
  ]
};
```

The index.html is just the skeleton of the js files.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script src="build/project.bundle.js" charset="utf-8"></script>
  </body>
</html>
```

Physical folders

The folders may vary, it depends on the deployment.

The common structure for source code control:

- assets (all the images, sound files, JSON data, xml, etc.,)
- src (all the source code)
- test (the test scenarios)
- config files for npm, .gitignore, lint, babel, webpack, or other tools

The common structure for building source code into deployable packages:

- build or dist folder
  - one project.bundel.js which includes all the minified JavaScript files
  - phase3 library minified js
  - index.html which includes the js files, css files
- css folder
- image folder

all the above files will be accessed by public

npm config files

## Common steps

1. Create the root folder, right click and open with VS Code
2. Ctrl + \` to open TERMINAL, `npm init` which creates the initial package.json file
3. install related packages
   - `npm install --save-dev phaser`
   - `npm install --save-dev webpack` and config the webpack.config.js
   - `npm install --save-dev webpack-dev-server`
4. EcmaScript 6 is recommended, and EcmaScript module (import / export) is recommended
5. if VS code is used as the editor, config the .editorconfig, settings.json etc., config the .eslintrc.json, .babelrc etc

## template

`git clone https://github.com/photonstorm/phaser3-project-template.git`

## resources

- <https://phasertutorials.com/creating-a-phaser-3-template-part-1/>
- <https://phasertutorials.com/creating-a-phaser-3-template-part-2/>
- <https://phasertutorials.com/creating-a-phaser-3-template-part-3/>

- <https://github.com/nkholski/phaser3-es6-webpack>

code

<https://phasertutorials.com/wp-content/uploads/2019/01/creating-a-phaser-3-template-part-1.zip>
<https://phasertutorials.com/wp-content/uploads/2019/01/Creating-a-Phaser-3-Template-Part-3.zip>
