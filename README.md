# Theme Boilerplate
## Install dependencies
In the freshly installed theme folder run the command below
```
npm install
```
## Configuration
Create the configuration file here ```bundler/config.js```, write the code below with the path you usually access to your WordPress website with your local server. For example:
```js
exports.datas = {
  'localPath': 'https://example.com'
}
```
Change theme name and text domain in style.css:
```css
/*
Theme Name: Your Theme Name
Version: 1.0.0
Text Domain: your-theme-name
*/
```
Change theme name in Makefile:
```makefile
THEME_NAME = your-theme-name
```

## Development
```
npm run watch
```
```
npm run watch --sourcemaps
```
## Production
```
npm run build
```
## Makefile
| Command      | Description                                          |
|--------------|------------------------------------------------------|
| `make`       | Install deps, build theme, create .zip of the plugin |
| `make build` | Install deps, build theme                            |
| `make zip`   | Create .zip of the theme                             |
| `make clean` | Delete .zip of the theme                             |