const fs = require('fs');
const { parseSync } = require('svgson');

const blankIconSet = require('./iconInfo/blankIconSet');
console.log('\x1b[42m%s\x1b[0m', "Package creation started .....................");
var result = [];
var selectedIconClassKey = '';

var arguments = process.argv.slice(2);
if (arguments.length > 0) {
  var libClassName = arguments[0];
  
  switch (libClassName) {
      case 'FA5': selectedIconClassKey = "fas fa-"; break;
      case 'FA4': selectedIconClassKey = "fa fa-"; break;
      case 'FA3':selectedIconClassKey = "icon-"; break;
      case 'Material':selectedIconClassKey = "zmdi zmdi-"; break;
      default: selectedIconClassKey = libClassName; break;
  }
}

var compiledSVGSet = [];
var totalIcons = blankIconSet.length;

for (var i=0; i < blankIconSet.length; i++) {
  var icon = blankIconSet[i];
  var fileName = icon.iconId+'.svg';
  var path = './icons/' + fileName;
  
  if (fs.existsSync(path)) {
    var fileIcon = fs.readFileSync(path, 'utf8');
    var svgJSONObject = parseSync(fileIcon);
    var iconData = { iconId: icon.iconId, iconInfo: svgJSONObject };
    compiledSVGSet.push(iconData);
  } else if (selectedIconClassKey) {
    compiledSVGSet.push({ iconId: icon.iconId, iconClassKey: selectedIconClassKey + icon.iconId });
  } else {
    compiledSVGSet.push({ iconId: icon.iconId, iconClassKey: '' });
  }
}

fs.writeFileSync('output.json', JSON.stringify(compiledSVGSet, null, 2), function (err, data) {
    if (err) { return console.log(err); }
});

console.log("Your icon package is ready..............");
