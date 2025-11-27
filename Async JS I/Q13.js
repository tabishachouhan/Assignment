
let loadingIntervalId;

function startLoadingSimulation() {
  console.log("Starting loading process...");

  
  loadingIntervalId = setInterval(() => {
    console.log("Loading...");
  }, 1000);

  
  setTimeout(() => {
    
    clearInterval(loadingIntervalId);


    console.log("Loaded successfully!");

    console.log("Loading simulation complete.");
  }, 5000);
}


startLoadingSimulation();