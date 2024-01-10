const __defaultNodeExpanded = false;

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

  Object.keys(tables).forEach((tableName) => {
    let count = tables[tableName].foreignKeys.length; // Count foreign keys in the table
    relationCounts[tableName] = count;

    tables[tableName].columns.forEach((column) => {
      if (column.key === 'FOREIGN KEY') {
        // Increase count for the referenced table
        relationCounts[column.references.table] = (relationCounts[column.references.table] || 0) + 1;
      }
    });
  });

  return relationCounts;
}

function drawERDiagram(tables) {
  let nodes = [];
  let edges = [];
  let tableIndexMap = {};
  let relationCounts = calculateRelationCounts(tables);

  const sortedTables = Object.keys(tables).sort((a, b) => relationCounts[b] - relationCounts[a]);

  sortedTables.forEach((tableName, index) => {
    let table = tables[tableName];
    tableIndexMap[tableName] = index;

    const margin = 10 + relationCounts[tableName] * 5;

    nodes.push({
      id: index,
      fieldsCount: table.columns?.length,
      widthConstraint: { maximum: 150, minimum: 150 },
      heightConstraint: { maximum: 120, minimum: 100 },
      tableName: tableName,
      label: createLabel(tableName, table, __defaultNodeExpanded),
      shape: "box",
      font: { multi: "html", size: 10 },
      margin: margin,
      expanded: __defaultNodeExpanded,
    });
  });

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
          color: { color: "#eeeeee", highlight: "#000000" },
          font: { color: "#bbbbbb", highlight: "#000000" },
          arrows: "to",
          style: "center",
        });
      }
    });
  });

  const columnSpacing = 200;
  const rowSpacing = 150;
  const numberOfColumns = 10;
  const numberOfRows = 10;
  const totalNodes = nodes.length;
  const maxIndex = numberOfColumns * numberOfRows;

  nodes.forEach((node, index) => {
    if (index < maxIndex) {
      const row = Math.floor(index / numberOfColumns);
      const column = index % numberOfColumns;
      node.x = column * (columnSpacing + node.margin);
      node.y = row * (rowSpacing + node.margin);
    } else {
      node.x = 0;
      node.y = (numberOfRows + 1) * rowSpacing;
    }
  });

  const options = {
    edges: { smooth: true, arrows: "to" },
    nodes: { shape: "box", margin: 3 },
    physics: { enabled: false },
    interaction: { dragNodes: true },
  };

  const container = document.getElementById("erDiagram");
  const data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
  const network = new vis.Network(container, data, options);

  network.fit();

  network.on("click", function (params) {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      const node = nodes.find((n) => n.id === nodeId);
      const tableName = node.tableName;
      const tableInfo = tables[tableName];
      node.expanded = !node.expanded;
      node.label = createLabel(tableName, tableInfo, node.expanded);
      data.nodes.update(node);
    }
  });
}
