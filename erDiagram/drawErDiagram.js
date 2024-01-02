const __defaultNodeExpanded = true;

function createLabel(tableName, columns, expanded = false) {
  let label = `<b>${tableName}</b>\n`;
  if (expanded) {
    // Show all columns
    label += columns.map((col) => `${col.name} (${col.type})`).join("\n\n");
  } else {
    // Show only primary keys
    const primaryKeys = columns.filter((col) => col.key === "PRIMARY KEY");
    label += primaryKeys
      .map((pk) => `${pk.name} (${pk.type}) [PK]`)
      .join("\n\n");
  }
  return label;
}

function drawERDiagram(tables) {
  let nodes = [];
  let edges = [];
  let tableIndexMap = {};

  Object.keys(tables).forEach((tableName, index) => {
    tableIndexMap[tableName] = index;
    nodes.push({
      id: index,
      fieldsCount: tables[tableName].columns?.length,
      tableName: tableName, // Store table name in each node
      label: createLabel(
        tableName,
        tables[tableName].columns,
        __defaultNodeExpanded
      ),
      shape: "box",
      font: { multi: "html", size: 14 },
      margin: 10,
      expanded: __defaultNodeExpanded, // Flag to track if the node is expanded
    });
  });

  // Create edges based on foreign keys
  Object.keys(tables).forEach((tableName) => {
    const tableInfo = tables[tableName];
    tableInfo.foreignKeys.forEach((fk) => {
      const fromIndex = tableIndexMap[tableName];
      const toIndex = tableIndexMap[fk.references.table];
      if (toIndex !== undefined && fromIndex !== toIndex) {
        edges.push({
          arrowScaleFactor: 0.5,
          from: fromIndex,
          to: toIndex,
          label: `${fk.column} -> ${fk.references.table}.${fk.references.column}`,
          color: {
            color: "#eeeeee",
            highlight: "#000000",
          },
          font: {
            color: "#bbbbbb",
            highlight: "#000000",
          },
          arrows: "to",
          style: "center",
        });
      }
    });
  });

  // Manually set initial positions for nodes
  const columnSpacing = 500;
  const rowSpacing = 600;
  const numberOfColumns = 10; // Specify the number of columns
  const numberOfRows = 10; // Specify the number of rows
  const totalNodes = nodes.length;
  const maxIndex = numberOfColumns * numberOfRows; // Maximum number of nodes to be positioned

  nodes.forEach((node, index) => {
    if (index < maxIndex) {
      const row = Math.floor(index / numberOfColumns);
      const column = index % numberOfColumns;
      node.x = column * columnSpacing;
      node.y = row * rowSpacing;// + (node.fieldsCount * 100);
    } else {
      // For nodes exceeding the grid, place them in a default position or handle as needed
      node.x = 0;
      node.y = (numberOfRows + 1) * rowSpacing; // Example: Place them below the grid
    }
  });

  const options = {
    edges: {
      smooth: true,
      arrows: "to",
    },
    nodes: {
      shape: "box",
      margin: 10,
    },
    physics: {
      enabled: false,
    },
    interaction: {
      dragNodes: true, // Allow nodes to be dragged
    },
  };

  // Create a network
  const container = document.getElementById("erDiagram");
  const data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };

  // Initialize Vis.js network
  const network = new vis.Network(container, data, options);

  // Disable physics after the initial layout is stabilized
  network.fit();

  network.on("click", function (params) {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      const node = nodes.find((n) => n.id === nodeId);
      const tableName = node.tableName;
      const tableInfo = tables[tableName];

      // Toggle the expanded state of the node
      node.expanded = !node.expanded;
      node.label = createLabel(tableName, tableInfo.columns, node.expanded);

      data.nodes.update(node);
    }
  });
}
