<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Information](#information)
- [Development](#development)
- [Texture:](#texture)
- [3D models:](#3d-models)
- [Folder Structure](#folder-structure)
- [Modules Usage](#modules-usage)

<!-- /code_chunk_output -->

### Information
This is a final year project of building a WebAR Game "Flag Defense"
Please use your mobile phone to visit ohbillychan.com and preapre [hiro and kanji marker](https://user-images.githubusercontent.com/6317076/27867388-64baee98-6191-11e7-9fbe-586fd79eba9d.png)

### Development
If you wanna to visit the folder 
`cd /"somewhere you want to put in the project"/`
`git clone https://github.com/bill0930/flag-defense-vue.git` 
`npm install`


### Texture: 
|   asset    |link   |  
|---|---|
|gravel| https://www.3dxo.com/textures/10519_gravel_2|

### 3D models:  
|   asset    |link   |  
|---|---|
|Castle  |  https://skfb.ly/6RLIt|
Blue Flag | https://skfb.ly/69FnY|
Red Flags | https://skfb.ly/69UEp|
Cannon  |https://skfb.ly/6zO7z|

### Folder Structure

|   Folder    |Explanation   |  File   |Explanation   |
|---|---|---|---|
|/.firebase| minimizes the size the time of a hosting deployment   |.firebaserc |firebase setting|
|/cert| file for HTTPS   |.gitignore|specify the files that should be ignored by git|
|/dist| ready for deployment files  |babel.config.js| babel config file that allow JS backward compatibility|
|/node_modules| npm related files  |conf.json|config for JSdoc|
|/out| JSdoc output files  |fireabse.json|config for firebase|
|/public| static files that will be not handled by Webpack| mainfest.json|A file that allow "add to home screen"|
|/src| Store  components of Vue files| package-lock.json| npm package files|
||   | package.json|npm package files|
||   | README.md| 
||   | vue.json.js| webpack configuration file|
||   | yarn.lock| YARN file|



### Modules Usage

| Modules | Applied for  | 
|---|---|
|  Font Awesome | Use of icons |
|  BootstrapVue | Grid system, Modal, Color-variant |
|  SweetAlert2 | Notifying users to enter full screen |
|  Vue-toasted | notifying the decision made by players |

