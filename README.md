# class-based-force-graph
Customizable D3.js force layout graph

# Usage (1) ~ override label setter
```JavaScript
class MyForce extends Force {

  // define how to get label ( for <text></text> )
  setLabel(node) { return node.id; }

}

// node data
let nodes = [
  {id: 0},
  {id: 1},
  {id: 2},
];

// link data
let links = [
  {source: 0, target: 1},    // 0 → 1
  {source: 1, target: 2},    // 1 → 2
]

// draw graph
let svgId = "svgArea";
let force = new MyForce(svgId, nodes, links);
```

# Usage (2) ~ override label setter (2) ~
```JavaScript
class MyForce extends Force {

  // define how to get label ( for <text></text> )
  setLabel(node) { 

    // <text>`${id}:${content}`</text>
    return [node.id, node.content].join(":");
  }

}

// node data ( nodes have new attribute "content" )
let nodes = [
  {id: 0, content: "setter"},
  {id: 1, content: "is"},
  {id: 2, content: "overridable"},
];

// link data
let links = [
  {source: 0, target: 1},
  {source: 1, target: 2},
];

let svgId = "svgArea";
let force = new MyForce(svgId, nodes, links);
```

# Usage (3) ~ override label & circle setter ~
```JavaScript
class MyForce extends Force {

  setLabel(node) {
    let label = "" + node.id;
    if (node.isRoot) label += " (root)";
    return label;
  }

  // override setter for circle color
  setNodeColor(node) {
    if (node.isRoot) return "orange";
    else return "teal";
  }

}

// node data
let nodes = [
  {id: 0, isRoot: true},
  {id: 1, isRoot: false},
  {id: 2, isRoot: false},
];

// link data
let links = [
  {source: 0, target: 1},
  {source: 0, target: 2},
];

// draw graph
let svgId = "svgArea";
let force = new MyForce(svgId, nodes, links);
```
