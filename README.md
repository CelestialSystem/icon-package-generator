# Grid Analyzer Backend Structure
The Backend code to serve the test data to Grid Analyzer Sencha Project


## Getting Started

### Prerequisites

1. Ensure that you have Node.js v10.13.0 or later installed and activated through [nvm](https://github.com/creationix/nvm) if working on macOS:

  ```sh
  nvm install v10.13.0
  nvm use v10.13.0
  ```

  For windows kindly download it from [NodeJS](https://nodejs.org/en/download/)

### Steps
1. To download the project, simply run the following command in your command-line interface tool:
  ```sh
  git clone https://github.com/CelestialSystem/grid_analyzer_backend.git
  ```
or you can download the zip folder.

2. Get inside the project using
  ```sh
  cd grid_analyzer_backend
  ```

3. Run NPM install command.
  ```sh
  npm install
  ```

### To Run the Server

1. To start the server, run
  ```sh
  npm start
  ```

## Version
It is the first draft of this project.


# icon-package-generator
Icon Package Generator as per the part of the Froala Icon Research PRD.

  ```sh
    npm install
  ```


__The purpose of this package genertor is to create a pluggable icon package that can be passed to the Froala Editor and by the help of this any user can easily update the icon set of Froala.__

This package include the complete list of icons key in json format that are used in Froala.

This package genertor works in two ways basically and it depends on the user requirement.
1. If the user want to update the icons used in Froala to an icon library and that library provides prefix like for Font Awesome 3/4/5 or Material Design or Glyphicon
Then in that case user just need to pass the className prefix of the same while running the generator. For eg:
In case of FA5: "fas fa-" should be the prefix
In case of FA4: "fa fa-" should be the prefix
In case of FA4: "icon-" should be the prefix
In case of Material Icons: "zmdi zmd-" should be the prefix

2. If the user is having SVG icons set of his/her own, then user can directly put the icons in the icons folder with the same name of the SVG file as that of key provided here: LINK to the set of Froala Icons.

___User can mix both the strategies as well.___

The command to generate the package:
___node iconSet <Prefix if any>___

For Eg: 
```
node iconSet
```
or
```
node iconSet zen-
```

After running the command and ___output.json___ will get created which is the target icon package, 
which can be directly tested here: Link to package tester.
