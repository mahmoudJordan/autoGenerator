const __defaultNodeExpanded = false;
const baseRadius = 1; // Increased from 150 to 200
const levelDistance = 100; // Increased from 500 to 600
const maxNodeSize = 100; // Maximum node size to prevent oversized nodes
// Place nodes in circles based on their level
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

function createLabel(tableName, table, expanded = false) {
  let label = `<b>${tableName}</b>\n\n`;
  if (expanded) {
    label += table.columns.map((col) => `${col.name} (${col.type})`).join("\n\n");
  } else {
    const primaryKeys = table.columns.filter((col) => col.key === "PRIMARY KEY");
    const foreignKeys = table.foreignKeys.map((fk) => table.columns.find(c => c.name == fk.column));

    label += primaryKeys.map((pk) => `${pk.name} (${pk.type}) [PK]`).join("\n\n");
    label += '\n\n';
    label += foreignKeys.map((fk) => `${fk.name} (${fk.type}) [FK]`).join("\n\n");
  }
  return label;
}

function calculateRelationCounts(tables) {
  let relationCounts = {};
  let maxRelations = 0;
  Object.keys(tables).forEach((tableName) => {
    // Here we just count the relations as before
    relationCounts[tableName] = tables[tableName].foreignKeys.length;
    maxRelations = Math.max(maxRelations, relationCounts[tableName]);
    tables[tableName].foreignKeys.forEach((fk) => {
      relationCounts[fk.references.table] = (relationCounts[fk.references.table] || 0) + 1;
      maxRelations = Math.max(maxRelations, relationCounts[fk.references.table]);
    });
  });
  // Now, invert the relation count so that more relations result in a lower level value
  Object.keys(relationCounts).forEach((tableName) => {
    relationCounts[tableName] = maxRelations - relationCounts[tableName];
  });
  return relationCounts;
}

function drawERDiagram(tables) {
  let nodes = [];
  let edges = [];
  let tableIndexMap = {};
  let relationCounts = calculateRelationCounts(tables);

  Object.keys(tables).forEach((tableName, index) => {
    let table = tables[tableName];
    tableIndexMap[tableName] = index;
    nodes.push({
      id: index,
      label: createLabel(tableName, table, __defaultNodeExpanded),
      shape: "box",
      font: { multi: "html", size: 14 },
      margin: 10,
      expanded: __defaultNodeExpanded,
      level: relationCounts[tableName], // Now using the inverse relation count
    });
  });


  Object.keys(tables).forEach((tableName) => {
    const tableInfo = tables[tableName];
    tableInfo.foreignKeys.forEach((fk) => {
      const fromIndex = tableIndexMap[tableName];
      const toIndex = tableIndexMap[fk.references.table];
      edges.push({
        from: fromIndex,
        to: toIndex,
        arrows: "to",
      });
    });
  });



  let levelGroups = {};
  nodes.forEach(node => {
    levelGroups[node.level] = levelGroups[node.level] || [];
    levelGroups[node.level].push(node);
  });

  Object.keys(levelGroups).forEach(level => {
    const angleIncrement = (2 * Math.PI) / levelGroups[level].length;
    levelGroups[level].forEach((node, index) => {
      const radius = (baseRadius + Number.parseInt(level) * levelDistance)
      node.x = centerX + radius * Math.cos(index * angleIncrement);
      node.y = centerY + radius * Math.sin(index * angleIncrement);
    });
  });

  const data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
  };

  const options = {
    // height: '100%',
    // width: '100%',
    physics: {
      enabled: false
    },
    interaction: {
      dragNodes: true
    },
    edges: {
      smooth: false
    },
    nodes: {
      // widthConstraint: maxNodeSize,
      //heightConstraint: //maxNodeSize * 2
    },
  };



  adjustFontSizeForDistance(nodes, 12, levelDistance); // baseFontSize is 14, adjust as needed

  const container = document.getElementById('erDiagram');
  const network = new vis.Network(container, data, options);

  network.on("stabilizationIterationsDone", function () {
    network.setOptions({ physics: false });
  });

  network.on("click", function (params) {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      const node = nodes.find(n => n.id === nodeId);
      const tableName = node.label.match(/<b>(.*?)<\/b>/)[1];
      const tableInfo = tables[tableName];
      node.expanded = !node.expanded;
      node.label = createLabel(tableName, tableInfo, node.expanded);
      data.nodes.update(node);
    }
  });




}



function adjustFontSizeForDistance(nodes, baseFontSize, levelDistance) {
  nodes.forEach(node => {
    const level = node.level || 0;
    const distanceFactor = Math.log2(levelDistance);
    node.font.size = Math.max(8, baseFontSize - (level * distanceFactor)); // Ensures font size does not get too small
  });
}

// You might also want to add a resize event listener to adjust the canvas size dynamically
window.addEventListener('resize', function () {
  const container = document.getElementById('erDiagram');
  container.style.width = window.innerWidth + 'px';
  container.style.height = window.innerHeight + 'px';
  network.fit(); // If using vis.js Network
});

