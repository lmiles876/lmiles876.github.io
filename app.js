// Toggle the message visibility
function toggleMessage() {
    const messageBox = document.getElementById('message-box');
    messageBox.classList.toggle('hidden'); // Toggle the visibility of the message box
}


function clearPhytoplankton1() {
    const phytoplankton2Container = document.querySelector('.phytoplankton2-container');
    const button1 = document.querySelector('.clear-button1');
    const header = document.querySelector('.header');

    header.classList.add('hidden');  // Hide the header
    button1.classList.add('hidden');  // Hide the clear button for phytoplankton1
    phytoplankton2Container.classList.remove('hidden');  // Show phytoplankton2 container
   
}

// Clear the phytoplankton image and show the whale and message button
function clearPhytoplankton2() {
    const dmsContainer = document.querySelector('.dms-container');
    const phytoplankton2Container = document.querySelector('.phytoplankton2-container');
    const phytoplankton1Container = document.querySelector('.phytoplankton1-container');
    const button2 = document.querySelector('.clear-button2');
    
    button2.classList.add('hidden');  // Hide the clear button for phytoplankton1
    // show phytoplankton2 container
    phytoplankton1Container.classList.add('hidden');  // Hide the phytoplankton1 container
    phytoplankton2Container.classList.add('hidden');  // Hide the phytoplankton2 container
    dmsContainer.classList.remove('hidden');  // Show phytoplankton2 container
}

function clearDms() {
    const whaleContainer = document.querySelector('.whale-container');
    const messageButton = document.querySelector('.mouth-button'); 
    const DMSbutton = document.querySelector('.dms-button');
    
    DMSbutton.classList.add('hidden');  // Hide the clear button for phytoplankton1
     
    
    // reveal the whale container and message button
   
    whaleContainer.classList.remove('hidden');  // Show the whale image container
    messageButton.classList.remove('hidden');  // Show the message button
}

// Function to toggle the message for Phytoplankton1
function togglePhytoplanktonMessage1() {
    const messageBox = document.getElementById('message-box1');
    // Toggle the display of the message box
    messageBox.style.display = messageBox.style.display === 'none' || messageBox.style.display === '' ? 'block' : 'none';
    if (messageBox.style.display === 'block') {
        messageBox.innerText = "This is a Phytoplankton! A tiny plant drifting in the ocean, phytoplankton are the foundation of the marine food web. But they don’t just feed the ocean—they also produce over half of the oxygen we breathe, making them vital for life on Earth. These small but mighty ocean superheroes truly keep the planet running!";
    }
}

// Function to toggle the message for Phytoplankton2
function togglePhytoplanktonMessage2() {
    const messageBox = document.getElementById('message-box2');
    // Toggle the display of the message box
    messageBox.style.display = messageBox.style.display === 'none' || messageBox.style.display === '' ? 'block' : 'none';
    if (messageBox.style.display === 'block') {
        messageBox.innerText = "This is a Zooplankton! Those microscopic heroes are eaten by zooplankton, such as krill, which are the main diet of some of the largest animals on Earth—like baleen whales! Here’s a fun fact: when zooplankton eat phytoplankton, they release a chemical called Dimethylsulfide (DMS) into the water.";
    }
}

// Function to toggle the message for DMS
function toggleDmsMessage() {
    const messageBox = document.getElementById('dms-message-box');
    // Toggle the display of the message box
    messageBox.style.display = messageBox.style.display === 'none' || messageBox.style.display === '' ? 'block' : 'none';
    if (messageBox.style.display === 'block') {
        messageBox.innerText = "But how do whales know where to go? Algae blooms = Whale food hotspots! Algae blooms, fueled by phytoplankton growth, create feeding hotspots for whales by supporting zooplankton like krill. Whales often adjust their migration routes and timing to follow these blooms, ensuring access to abundant prey. At the Woods Hole Oceanographic Institution (WHOI), scientists are researching whether whales can sense DMS—the chemical released when zooplankton eat phytoplankton. Did you know both whale sharks and seabirds have been shown to use DMS to find food?";
    }
}
