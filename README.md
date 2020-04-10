# icon-package-generator
Icon Package Generator as per the part of the Research PRD.

To start with need to run "npm install"

The purpose of this package genertor is to create a pluggable icon package that can be passed to the Froala Editor and can be directly consumed.
By the help of this any user can easily update the icon set of Froala.

This package include the complete list of icons key in json format that are used in Froala.

This package genertor works in to ways and it depends on the user requirement.
1. If the user want to update the icons used in Froala to an icon library and that library provides prefix like for Font Awesome 3/4/5 or Material Design or Glyphicon
Then in that case user just need to pass the className prefix of the same while running the generator. For eg:
In case of FA5: "fas fa-" should be the prefix
In case of FA4: "fa fa-" should be the prefix
In case of FA4: "icon-" should be the prefix
In case of Material Icons: "zmdi zmd-" should be the prefix

Then in this case the icon package will be generated accordingly.

2. If the user is having SVG icons set of his/her own, then user can directly put the icons in the icons folder with the same name of the SVG file as that of key provided here: LINK to the set of Froala Icons.

3. User can mix both the strategies as well.

The command to generate is as 
node iconSet <Prefix if any>

You may also directly check your icon set here as well: Link to package tester.
