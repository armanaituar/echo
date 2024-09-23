let revisionMode = false;
let connectMode = false;
let selectedNodes = [];
let selectedColour = '#FB5000';
let selectedType = 'folder';
let selectedShape = 'sphere';
let selectedNode = null;  // Store the currently selected node for renaming
let currentAudioNode = null;  // Track the currently playing node
let audioPlayer = document.getElementById('audio-player');  // Reference to the audio player

let graphData = {
  nodes: [
    
        {
          id: 'audio-1',
          label: '1st day of school lasser',
          group: 'audio',
          size: 20,
          color: '#FB5000', // Orange
          shape: 'cube',
          audioUrl: './audio/1st day of school lasser.m4a'
        },
        {
          id: 'audio-2',
          label: '1st trees',
          group: 'audio',
          size: 17,
          color: '#037C2D', // Green
          shape: 'sphere',
          audioUrl: './audio/1st trees.m4a'
        },
        {
          id: 'audio-3',
          label: 'acorn ground',
          group: 'audio',
          size: 21,
          color: '#FF93B0', // Pink
          shape: 'cube',
          audioUrl: './audio/acorn ground.m4a'
        },
        {
          id: 'audio-4',
          label: 'alumni',
          group: 'audio',
          size: 25,
          color: '#FFFDE7', // Cream
          shape: 'sphere',
          audioUrl: './audio/alumni.m4a'
        },
        {
          id: 'audio-5',
          label: 'belkin',
          group: 'audio',
          size: 12,
          color: '#FF3060', // Pink
          shape: 'sphere',
          audioUrl: './audio/belkin.m4a'
        },
        {
          id: 'audio-6',
          label: 'bike through campus',
          group: 'audio',
          size: 14,
          color: '#5A00E0', // Purple
          shape: 'cube',
          audioUrl: './audio/bike through campus.m4a'
        },
        {
          id: 'audio-7',
          label: 'bio sci courtyard',
          group: 'audio',
          size: 30,
          color: '#FFFDE7', // Cream
          shape: 'sphere',
          audioUrl: './audio/bio sci courtyard.m4a'
        },
        {
          id: 'audio-8',
          label: 'buchanan',
          group: 'audio',
          size: 24,
          color: '#FF93B0', // Light Pink
          shape: 'sphere',
          audioUrl: './audio/buchanan.m4a'
        },
        {
          id: 'audio-9',
          label: 'chan centre wilson',
          group: 'audio',
          size: 24,
          color: '#FF93B0', // Light Pink
          shape: 'sphere',
          audioUrl: './audio/chan centre wilson.m4a'
        },
        {
          id: 'audio-10',
          label: 'chan centre',
          group: 'audio',
          size: 21,
          color: '#FF93B0', // Light Pink
          shape: 'sphere',
          audioUrl: './audio/chan centre.m4a'
        },
        {
          id: 'audio-11',
          label: 'childcare wall',
          group: 'audio',
          size: 16,
          color: '#047DFF', // Blue
          shape: 'sphere',
          audioUrl: './audio/childcare wall.m4a'
        },
        {
          id: 'audio-12',
          label: 'education bldng',
          group: 'audio',
          size: 32,
          color: '#037C2D', // Green
          shape: 'sphere',
          audioUrl: './audio/education bldng.m4a'
        },
        {
          id: 'audio-13',
          label: 'flag',
          group: 'audio',
          size: 12,
          color: '#047DFF', // Blue
          shape: 'sphere',
          audioUrl: './audio/flag.m4a'
        },
        {
          id: 'audio-14',
          label: 'fountain',
          group: 'audio',
          size: 20,
          color: '#FF3060', // Pink
          shape: 'cube',
          audioUrl: './audio/fountain.m4a'
        },
        {
          id: 'audio-15',
          label: 'frank frwrd',
          group: 'audio',
          size: 35,
          color: '#037C2D', // Green
          shape: 'sphere',
          audioUrl: './audio/frank frwrd.m4a'
        },
        {
          id: 'audio-16',
          label: 'growing building',
          group: 'audio',
          size: 30,
          color: '#037C2D', // Green
          shape: 'sphere',
          audioUrl: './audio/growing building.m4a'
        },
        {
          id: 'audio-17',
          label: 'hebb cedar',
          group: 'audio',
          size: 19,
          color: '#FF93B0', // Light Pink
          shape: 'sphere',
          audioUrl: './audio/hebb cedar.m4a'
        },
        {
          id: 'audio-18',
          label: 'laserre bench',
          group: 'audio',
          size: 30,
          color: '#F5EC6D', // Yellow
          shape: 'sphere',
          audioUrl: './audio/laserre bench.m4a'
        },
        {
          id: 'audio-19',
          label: 'leafs main mall',
          group: 'audio',
          size: 20,
          color: '#FF93B0', // Light Pink
          shape: 'cube',
          audioUrl: './audio/leafs main mall.m4a'
        },
        {
          id: 'audio-20',
          label: 'living bridge',
          group: 'audio',
          size: 30,
          color: '#037C2D', // Green
          shape: 'pyramid',
          audioUrl: './audio/living bridge.m4a'
        },
        {
          id: 'audio-21',
          label: 'macmillan',
          group: 'audio',
          size: 25,
          color: '#FF93B0', // Light Pink
          shape: 'cube',
          audioUrl: './audio/macmillan.m4a'
        },
        {
          id: 'audio-22',
          label: 'main mall to bio sci',
          group: 'audio',
          size: 15,
          color: '#047DFF', // Blue
          shape: 'sphere',
          audioUrl: './audio/main mall to bio sci.m4a'
        },
        {
          id: 'audio-23',
          label: 'nest plaza',
          group: 'audio',
          size: 15,
          color: '#5A00E0', // Purple
          shape: 'sphere',
          audioUrl: './audio/nest plaza.m4a'
        },
        {
          id: 'audio-24',
          label: 'nitobe big water',
          group: 'audio',
          size: 26,
          color: '#037C2D', // Green
          shape: 'pyramid',
          audioUrl: './audio/nitobe big water.m4a'
        },
        {
          id: 'audio-25',
          label: 'nitobe machine',
          group: 'audio',
          size: 17,
          color: '#FFFDE7', // Cream
          shape: 'cube',
          audioUrl: './audio/nitobe machine.m4a'
        },
        {
          id: 'audio-26',
          label: 'nitobe small water',
          group: 'audio',
          size: 34,
          color: '#037C2D', // Green
          shape: 'cube',
          audioUrl: './audio/nitobe small water.m4a'
        },
        {
          id: 'audio-27',
          label: 'old admin bldng',
          group: 'audio',
          size: 23,
          color: '#F5EC6D', // Yellow
          shape: 'sphere',
          audioUrl: './audio/old admin bldng.m4a'
        },
        {
          id: 'audio-28',
          label: 'rain in ground',
          group: 'audio',
          size: 20,
          color: '#FF93B0', // Light Pink
          shape: 'cube',
          audioUrl: './audio/rain in ground.m4a'
        },
        {
          id: 'audio-29',
          label: 'rain on leafs',
          group: 'audio',
          size: 25,
          color: '#FF93B0', // Light Pink
          shape: 'cube',
          audioUrl: './audio/rain on leafs.m4a'
        },
        {
          id: 'audio-30',
          label: 'rose garden',
          group: 'audio',
          size: 18,
          color: '#FB5000', // Orange
          shape: 'sphere',
          audioUrl: './audio/rose garden.m4a'
        },
        {
          id: 'audio-31',
          label: 'theatre + tunnel',
          group: 'audio',
          size: 15,
          color: '#FF93B0', // Light Pink
          shape: 'sphere',
          audioUrl: './audio/theatre + tunnel.m4a'
        },
        {
          id: 'audio-32',
          label: 'turf field',
          group: 'audio',
          size: 24,
          color: '#5A00E0', // Purple
          shape: 'pyramid',
          audioUrl: './audio/turf field.m4a'
        },
        {
          id: 'audio-33',
          label: 'vent symphony',
          group: 'audio',
          size: 30,
          color: '#FFFDE7', // Cream
          shape: 'cube',
          audioUrl: './audio/vent symphony.m4a'
        }
      ],
      links: []
};

// Create the 3D graph
const Graph = ForceGraph3D()(document.getElementById('3d-graph'))
  .graphData(graphData)
  .nodeLabel(node => `
    <div style="font-family: 'Inter', sans-serif; font-weight: 300; font-size: 12px; color: white;">
      ${node.label}
    </div>
  `)  .nodeAutoColorBy('group')
  .nodeThreeObject(node => {
    let geometry;

    // Define geometry for cube, sphere, and pyramid (now tetrahedron)
    if (node.shape === 'cube') {
      geometry = new THREE.BoxGeometry(node.size, node.size, node.size);
    } else if (node.shape === 'sphere') {
      geometry = new THREE.SphereGeometry(node.size, 16, 16);
    } else if (node.shape === 'pyramid') {
      geometry = new THREE.TetrahedronGeometry(node.size); // 3-sided pyramid (tetrahedron)
    }

    const material = new THREE.MeshBasicMaterial({
      color: node.color, // Keep the original color
      transparent: true,
      opacity: 1 // Full opacity initially
    });

    const mesh = new THREE.Mesh(geometry, material);

    // If it's a cube or pyramid, add wireframe edges
    if (node.shape === 'cube' || node.shape === 'pyramid') {
      const edges = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 'black',
        linewidth: 1
      });
      const lines = new THREE.LineSegments(edges, lineMaterial);

      const group = new THREE.Group();
      group.add(lines);  // Add thin lines along edges
      group.add(mesh);   // Add the main cube or pyramid

      return group;      // Return the grouped object with edge lines
    }

    // Return the mesh for spheres
    return mesh;
});

// Search functionality
document.getElementById('search').addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();

  // Iterate through the nodes and set opacity based on search term
  Graph.nodeThreeObject(node => {
    const match = node.label.toLowerCase().includes(searchTerm);

    const geometry = node.shape === 'cube'
      ? new THREE.BoxGeometry(node.size, node.size, node.size)
      : (node.shape === 'pyramid'
        ? new THREE.ConeGeometry(node.size, node.size, 4) // Pyramid shape
        : new THREE.SphereGeometry(node.size, 16, 16)); // Default to sphere

    const material = new THREE.MeshBasicMaterial({
      color: node.color, // Keep original color
      transparent: true,
      opacity: match ? 1 : 0.25 // 25% opacity for non-matches
    });

    const mesh = new THREE.Mesh(geometry, material);

    if (node.shape === 'cube') {
      const edges = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: match ? 'black' : 'grey',
        transparent: true,
        opacity: match ? 1 : 0.5
      });
      const lines = new THREE.LineSegments(edges, lineMaterial);

      const group = new THREE.Group();
      group.add(lines);  // Add thin lines along edges
      group.add(mesh);   // Add the main cube

      return group;
    }

    return mesh;
  });
});

// Handle node click for playing audio
Graph.onNodeClick(node => {
  selectedNode = node;  // Set the selected node when it's clicked
  document.getElementById('title-input').value = node.label;  // Display node label in the input field

  if (connectMode) {
    if (selectedNodes.includes(node)) {
      selectedNodes = selectedNodes.filter(n => n !== node);
    } else {
      selectedNodes.push(node);
    }

    if (selectedNodes.length === 2) {
      connectNodes();
    }
  } else {
    if (node.audioUrl) {
      if (currentAudioNode === node) {
        if (audioPlayer.paused) {
          audioPlayer.play();
        } else {
          audioPlayer.pause();
        }
      } else {
        currentAudioNode = node;
        audioPlayer.src = node.audioUrl;
        audioPlayer.play();
      }
    }
  }
});

Graph.d3Force('link').distance(200); // Adjust the number here for more/less tension

// After initializing the graph, you can add these two lines to control tension and link thickness

Graph.d3Force('link').distance(150); // Adjust the number here for more/less tension

// Function to add links between selected nodes
function connectNodes() {
  if (selectedNodes.length === 2) {
    const link = { source: selectedNodes[0].id, target: selectedNodes[1].id };
    graphData.links.push(link);  // Add the connection (link) to the graph data
    selectedNodes = [];  // Reset the selected nodes
    Graph.graphData(graphData);  // Update the graph to show the new link
  }
}

// Handle file upload when arrow is clicked
document.getElementById('add-audio-btn').addEventListener('click', () => {
  document.getElementById('audio-upload').click(); // Trigger file input
});

// On file selection, associate the audio with a node
document.getElementById('audio-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const audioUrl = URL.createObjectURL(file); // Create an object URL for the audio file

    const newNode = {
      id: 'audio-' + Math.random().toString(36).substring(7),
      label: file.name,  // Use file name as label
      group: 'audio',
      size: parseInt(document.getElementById('size-slider').value),
      color: selectedColour,
      shape: selectedShape,
      audioUrl: audioUrl  // Store the audio URL in the node
    };

    graphData.nodes.push(newNode); // Add new node with audio
    Graph.graphData(graphData); // Update graph
  }
});

// Toggle Connect Mode when the "Connect" button is clicked
document.getElementById('connect-btn').addEventListener('click', () => {
  connectMode = !connectMode;
  if (connectMode) {
    selectedNodes = [];  // Clear the selection if connect mode is toggled
  }
});

// Update node label when typing in the input field
document.getElementById('title-input').addEventListener('input', () => {
  if (selectedNode) {
    selectedNode.label = document.getElementById('title-input').value;  // Update the node label
    Graph.graphData(graphData);  // Refresh the graph to show the updated label
  }
});

// Colour selection
document.querySelectorAll('.colour-option').forEach(colour => {
  colour.addEventListener('click', () => {
    selectedColour = colour.getAttribute('data-colour');
    document.querySelectorAll('.colour-option').forEach(c => c.classList.remove('selected'));
    colour.classList.add('selected');
  });
});

// Type selection (folder/audio)
document.getElementById('folder-option').addEventListener('click', () => {
  selectedType = 'folder';
  document.getElementById('folder-option').classList.add('selected');
  document.getElementById('audio-option').classList.remove('selected');
});
document.getElementById('audio-option').addEventListener('click', () => {
  selectedType = 'audio';
  document.getElementById('audio-option').classList.add('selected');
  document.getElementById('folder-option').classList.remove('selected');
});

// Shape selection (sphere/cube)
document.getElementById('sphere-option').addEventListener('click', () => {
  selectedShape = 'sphere';
  document.getElementById('sphere-option').classList.add('selected');
  document.getElementById('cube-option').classList.remove('selected');
});
document.getElementById('cube-option').addEventListener('click', () => {
  selectedShape = 'cube';
  document.getElementById('cube-option').classList.add('selected');
  document.getElementById('sphere-option').classList.remove('selected');
});

// Add a new node
document.getElementById('add-node-btn').addEventListener('click', () => {
  const newNode = {
    id: 'new-' + Math.random().toString(36).substring(7),
    label: document.getElementById('title-input').value || 're/name',
    group: selectedType,
    size: parseInt(document.getElementById('size-slider').value),
    color: selectedColour,
    shape: selectedShape
  };

  graphData.nodes.push(newNode);
  Graph.graphData(graphData); // Update the graph with new data

  // Clear the label input field after adding the node
  document.getElementById('title-input').value = '';
});

// Toggle Revision Mode
document.getElementById('revision-mode-btn').addEventListener('click', () => {
  revisionMode = !revisionMode;

  const controlPanel = document.getElementById('control-panel');
  const revisionBtn = document.getElementById('revision-mode-btn');

  if (revisionMode) {
    controlPanel.style.display = 'block';
    controlPanel.style.opacity = 0;
    controlPanel.style.transition = 'opacity 0.5s ease'; // Apply the fade-in effect
    setTimeout(() => {
      controlPanel.style.opacity = 1; // Trigger fade-in
    }, 10);

    revisionBtn.classList.add('active'); // Rotate the plus sign
  } else {
    controlPanel.style.opacity = 0; // Start the fade-out
    controlPanel.style.transition = 'opacity 0.5s ease'; // Ensure transition applies to fade-out
    setTimeout(() => {
      controlPanel.style.display = 'none'; // Hide the control panel after fade-out
    }, 500); // Wait for the opacity transition to finish
    revisionBtn.classList.remove('active');
  }
});