
$(function(){
  draw_graph_intro();
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab

  switch(target) {
  case "#graph_item":
    draw_graph_intro();
    break;
  case "#vertices_item":
    draw_vertices_intro();
    break;
  case "#edges_item":
    draw_edges_intro();
    break;
  default:
    draw_graph_intro();
  }
});


function draw_graph_intro() {

  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: '0',font: {'face': 'Monospace', align: 'right'}},
    {id: 2, label: '1',},
    {id: 3, label: '2',},
    {id: 4, label: '3',},
    {id: 5, label: '4',},
    {id: 6, label: '5',},
    {id: 7, label: '5',}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3, to: 3},
    {from: 1, to: 4},
  ]);

  // create a network
  var container = document.getElementById('graph_intro');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {layout:{randomSeed:0},
    nodes: {
        shape: 'circle',
        size: 30,
        font: {
            size: 32
        },
        borderWidth: 2,
        shadow:true
    },
    edges: {
        width: 2,
        shadow:true
    }};
  var network = new vis.Network(container, data, options);
  console.log(network.getPositions());


};

function draw_edges_intro() {

  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: '0',font: {'face': 'Monospace', align: 'right'}},
    {id: 2, label: '1',},
    {id: 3, label: '2',},
    {id: 4, label: '3',},
    {id: 5, label: '4',},
    {id: 6, label: '5',}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4}
  ]);

  // create a network
  var container = document.getElementById('edges_intro');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {layout:{randomSeed:0},
    nodes: {
        shape: 'circle',
        size: 30,
        font: {
            size: 32
        },
        borderWidth: 2,
        shadow:true
    },
    edges: {
        width: 2,
        shadow:true
    }};
  var network = new vis.Network(container, data, options);
  console.log(network.getPositions());
};

function draw_vertices_intro() {

  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: '0',font: {'face': 'Monospace', align: 'right'}},
    {id: 2, label: '1',},
    {id: 3, label: '2',},
    {id: 4, label: '3',},
    {id: 5, label: '4',},
    {id: 6, label: '5',}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3, to: 3},
    {from: 1, to: 4},
  ]);

  // create a network
  var container = document.getElementById('vertices_intro');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {layout:{randomSeed:0},
    nodes: {
        shape: 'circle',
        size: 30,
        font: {
            size: 32
        },
        borderWidth: 2,
        shadow:true
    },
    edges: {
        width: 2,
        shadow:true
    }};
  var network = new vis.Network(container, data, options);
  console.log(network.getPositions());
};
