
document.addEventListener('DOMContentLoaded',function(){
  draw_graph_intro();
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab

  if (document.getElementById('graph_intro') == null){
    // I do not know how to handle errors that follow if graph_intro is not visible when this script executes.
    // Thus I abort execution ahead of time.
    return;
  };

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

  // create people.
  // value corresponds with the age of the person
  nodes = [
    {id: 1,  value: 0,  label: 'Algie' },
    {id: 2,  value: 19,  label: 'Alston'},
    {id: 3,  value: 11,  label: 'Barney'},
    {id: 4,  value: 10,  label: 'Coley' },
    {id: 5,  value: 3,  label: 'Grant' },
    {id: 6,  value: 10, label: 'Langdon'},
    {id: 7,  value: 6, label: 'Lee'},
    {id: 8,  value: 3, label: 'Merlin'},
    {id: 9,  value: 11, label: 'Mick'},
    {id: 10, value: 3, label: 'Tod'},
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    {from: 2, to: 8, value: 3},
    {from: 2, to: 9, value: 5},
    {from: 2, to: 10,value: 1},
    {from: 4, to: 6, value: 10},
    {from: 5, to: 7, value: 2},
    {from: 9, to: 10,value: 2},
    {from: 2, to: 3, value: 6},
    {from: 3, to: 9, value: 4},
    {from: 5, to: 3, value: 1},
    {from: 2, to: 7, value: 4}
  ];

  // Instantiate our network object.
  var container = document.getElementById('graph_intro');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    layout:{
      randomSeed:0,
      improvedLayout: true
    },
    interaction:{
      hover : false,
      tooltipDelay : 50,
      zoomView: false,
      dragView: false,
      dragNodes: false,
      navigationButtons: false,
      selectable: false
    },
    nodes: {
      shape: 'dot',
      borderWidth: 2,
      shadow:true,
      font: {
        size:20,
        bold:true
      }
      },
    edges: {
      shadow: true,
      hoverWidth: 0,
      font: {
        size:30
      }
    },
    scaling: {
      customScalingFunction: function (min,max,total,value) {
        return value/total;
      },
      min:5,
      max:150
    }
  };

  network = new vis.Network(container, data, options);

};

function draw_edges_intro() {

  // create people.
  // value corresponds with the age of the person
  nodes = [
    {id: 1,  value: 0,  label: 'Algie' },
    {id: 2,  value: 19,  label: 'Alston'},
    {id: 3,  value: 11,  label: 'Barney'},
    {id: 4,  value: 10,  label: 'Coley' },
    {id: 5,  value: 3, label: 'Grant' },
    {id: 6,  value: 10,  label: 'Langdon'},
    {id: 7,  value: 6,  label: 'Lee'},
    {id: 8,  value: 3,  label: 'Merlin'},
    {id: 9,  value: 11,  label: 'Mick'},
    {id: 10, value: 3, label: 'Tod'},
  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    {from: 2, to: 8, value: 3, title:'3 mail(s) exchanged'},
    {from: 2, to: 9, value: 5, title:'5 mail(s) exchanged'},
    {from: 2, to: 10,value: 1, title:'1 mail(s) exchanged'},
    {from: 4, to: 6, value: 10, title:'10 mail(s) exchanged'},
    {from: 5, to: 7, value: 2, title:'2 mail(s) exchanged'},
    {from: 9, to: 10,value: 2, title:'2 mail(s) exchanged'},
    {from: 2, to: 3, value: 6, title:'6 mail(s) exchanged'},
    {from: 3, to: 9, value: 4, title:'4 mail(s) exchanged'},
    {from: 5, to: 3, value: 1, title:'1 mail(s) exchanged'},
    {from: 2, to: 7, value: 4, title:'4 mail(s) exchanged'}
  ];

  // Instantiate our network object.
  var container = document.getElementById('edges_intro');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    layout:{
      randomSeed:0,
      improvedLayout: true
    },
    interaction:{
      hover : true,
      tooltipDelay : 50,
      zoomView: false,
      dragView: false,
      dragNodes: false,
      navigationButtons: false,
      selectable: false
    },
    nodes: {
      shape: 'dot',
      borderWidth: 2,
      shadow:true,
      font: {
        size:20
      },
      color: {
        border: '#2B7CE9',
        background: '#97C2FC',
        highlight: {
          border: '#2B7CE9',
          background: '#97C2FC'
        },
        hover: {
          border: '#2B7CE9',
          background: '#97C2FC'
        }
      }
    },
    edges: {
      shadow: true,
      hoverWidth: function (width) {return width*2.0;},
      font: {
        size:30
      },
      color: {
        color:'#de2d26',
        highlight:'#de2d26',
        hover: '#de2d26',
        inherit: false,
        opacity:1.0
      },
    },
    scaling: {
      customScalingFunction: function (min,max,total,value) {
        return value/total;
      },
      min:5,
      max:150
    }
  };
  network = new vis.Network(container, data, options);

};

function draw_vertices_intro() {

    // create people.
    // value corresponds with the age of the person
    nodes = [
      {id: 1,  value: 0,  title: '0 mail(s) total', label: 'Algie' },
      {id: 2,  value: 19, title: '19 mail(s) total', label: 'Alston'},
      {id: 3,  value: 11, title: '11 mail(s) total', label: 'Barney'},
      {id: 4,  value: 10, title: '10 mail(s) total', label: 'Coley' },
      {id: 5,  value: 3, title: '3 mail(s) total', label: 'Grant' },
      {id: 6,  value: 10, title: '10 mail(s) total', label: 'Langdon'},
      {id: 7,  value: 6,  title: '6 mail(s) total', label: 'Lee'},
      {id: 8,  value: 3,  title: '3 mail(s) total', label: 'Merlin'},
      {id: 9,  value: 11, title: '11 mail(s) total', label: 'Mick'},
      {id: 10, value: 3, title: '3 mail(s) total', label: 'Tod'},
    ];

    // create connections between people
    // value corresponds with the amount of contact between two people
    edges = [
      {from: 2, to: 8, value: 3},
      {from: 2, to: 9, value: 5},
      {from: 2, to: 10,value: 1},
      {from: 4, to: 6, value: 10},
      {from: 5, to: 7, value: 2},
      {from: 9, to: 10,value: 2},
      {from: 2, to: 3, value: 6},
      {from: 3, to: 9, value: 4},
      {from: 5, to: 3, value: 1},
      {from: 2, to: 7, value: 4}
    ];

    // Instantiate our network object.
    var container = document.getElementById('vertices_intro');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      layout:{
        randomSeed:0,
        improvedLayout: true
      },
      interaction:{
        hover : true,
        tooltipDelay : 50,
        zoomView: false,
        dragView: false,
        dragNodes: false,
        navigationButtons: false,
        selectable: false
      },
      nodes: {
        shape: 'dot',
        borderWidth: 2,
        shadow:true,
        font: {
          size:20
        },
        color: {
          border: '#de2d26',
          background: '#fc9272',
          highlight: {
            border: '#de2d26',
            background: '#fc9272'
          },
          hover: {
            border: '#de2d26',
            background: '#fee0d2'
          }
        }
      },
      edges: {
        shadow: true,
        hoverWidth:0,
        font: {
          size:30
        },
        color: {
          color:'#2B7CE9',
          highlight:'#2B7CE9',
          hover: '#2B7CE9',
          inherit: false,
          opacity: 1
        },
      },
      scaling: {
        customScalingFunction: function (min,max,total,value) {
          return value/total;
        },
        min:5,
        max:150
      }
    };
    network = new vis.Network(container, data, options);

  };
