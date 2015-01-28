# TreeMap

[![NPM version](http://img.shields.io/npm/v/treemap.svg)](https://www.npmjs.org/package/treemap) 
[![Build Status](https://secure.travis-ci.org/Akshit-/treemap.png?branch=master)](http://travis-ci.org/Akshit-/treemap) 

> TreeMap Visualization

## Description
The Treemap visualization is for depicting hierarchies. It uses a rectangular, space-filling slice-and-dice technique to visualize objects in the different levels of a hierarchy. 

## Getting Started
Install the module with: `npm install treemap`

```javascript
var treemap = require('treemap');
treemap.hello("biojs"); // "hello biojs"
```
## Documentation

#### How to have a new Treemap with different .json file?
- In the simple.js replace the flare.json with a new one.
```javascript
var app = require("treemap");
var instance = new app({el: yourDiv, flareJSON: '../data/flare.json'});
```
- JSON file should be in a structure/formatted as shown below

```javascript
{name : "F",
  children: [
    {name: "A", size: 0.1},
    {name: "B", size: 0.2},
    {
      name: "E",
      length: 0.5,
      children: [
        {name: "C", size: 0.3},
        {name: "D", size: 0.4}
      ]
    }
  ]
}
```
-	If JSON is not in the above structure, you can make use of **BioJS Newick Parser** for parsing a string into JSON.
-	Cutomize the treemap like height,width,...etc. by changing the values.
```javascript
var opts =  {
  
  w: 960,
  h: 600
};
```

With all the parameters, you have to change them accordingly. Here are the descriptions:
- **"json"** : the .json file that you would like to visulaize.
- **"w"** : the width of the visualization component.
- **"h"** : the height position of the visualization component.


Additionally, by "click" on each rectangle, the particular object gets zoomed and the corresponding hierarchy is displayed.

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/Akshit-/treemap/issues).

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2015, akshit, vinod

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
