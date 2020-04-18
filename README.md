<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Texture:](#texture)
- [3D models:](#3d-models)

<!-- /code_chunk_output -->

### Texture: 

gravel: https://www.3dxo.com/textures/10519_gravel_2

### 3D models:  
Castle:     https://skfb.ly/6RLIt
Blue Flag:  https://skfb.ly/69FnY
Red Flags:  https://skfb.ly/69UEp
Cannon:     https://skfb.ly/6zO7z

###
icon : https://lh3.googleusercontent.com/proxy/V4zl2MrE-pkYEQhc56OE98AkbjAKRqy7ZrMpfyBWSx-Wzp6FqF0pIOGgRDSXDZLsW5dL3N1mur6wX_LET_enIi-WpUMc004jy2PVTcD5D_rM

/flag-defense-vue
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


-----
----

| Modules | Applied for  | 
|---|---|
|  Font Awesome | Use of icons |
|  BootstrapVue | Grid system, Modal, Color-variant |
|  SweetAlert2 | Notifying users to enter full screen |
|  Vue-toasted | notifying the decision made by players |


./src
|____App.vue                    //the App components
|____.DS_Store                  //Mac file (untrelated)
|____plugins                    //the subfolder contains the use of plugins
| |____vue-toasted.js           //the vue-toasted plugin
| |____fontawesome.js           //the fontawesome plugin
| |____bootstrap-vue.js         //the bootstrapvue plugin
|____js                         //the subfolder contains the model of class
| |____GameScene.js             //the GameScene Class definition file
| |____Player.js                //the Player Class definition file
|____main.js                    //the entry point of file
|____components                 //the components that subordindate to App component 
| |____RPSBar.vue               //"Rock-Paper-Scissors Bar" component that handles the function of Rock-Paper-Scissors
|____assets                     //storing the assets that will be used in the project
| |____logo.png                 //The default Vue logo(not used)(untrelated)


./public
|____favicon.ico                //the icon displayed at browser tag in .ico
|____index.html                 //the index page for hosting the App.vue
|____.DS_Store                  //Mac file (untrelated)
|____404.html                   //the page rendered when server no response
|____glTF                       //the folder contains 3D models in glTF formart
| |____flag_red                 //the red flag folder
| | |____textures               //the textures folders for red flags
| | | |____texture01_metallicRoughness.png
| | | |____texture01_baseColor.png
| | |____.DS_Store              //Mac file (untrelated)
| | |____scene.gltf             //the redflag 3D model
| | |____scene.bin              //the cooresponding binary file for gltf
| |____flag_blue                //the blue flag folder
| | |____textures               //...
| | | |____Scene_-_Root_baseColor.png
| | |____.DS_Store      
| | |____scene.gltf             
| | |____scene.bin          
| |____.DS_Store
| |____castle                   //the castle folder
| | |____.DS_Store
| | |____scene.gltf         
| | |____scene.bin
| |____simple_cannon            //the cannon folder
| | |____textures
| | | |____Scene_-_Root_normal.png
| | | |____Scene_-_Root_baseColor.png
| | | |____Scene_-_Root_metallicRoughness.png
| | |____.DS_Store
| | |____scene.gltf
| | |____scene.bin
|____favicon.png                //the icon displayed at browser tag in .png
|____texture                    //the texture material folder for wall
| |____.DS_Store
| |____gravel.png               //the texture named gravel2