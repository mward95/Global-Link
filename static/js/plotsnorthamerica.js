// js goes here
// Initialized arrays
let Apple = []
let Samsung = []
const getAppleData = (northamericaData) => {

  if (!northamericaData?.length) {
    return null;
  }
  console.log(northamericaData?.length)
  for (let index = 0; index < northamericaData?.length; index++) {
  const northamerica = northamericaData[index];
  console.log(northamerica)
  Apple.push(northamerica["Apple"])
  Samsung.push(northamerica["Samsung"])
 }
}
const fetch_northamerica = async () => {

  try {
   const data = await  fetch("/api/northamerica").then((res) => res.json());

   getAppleData(data);
  //  apple
   const sum_apple = Apple.reduce((a, b) => a + b, 0);
   const avg_apple = (sum_apple / Apple.length) || 0;
   console.log("Apple_mean" + avg_apple)
   
  // Samsung
   const sum_samsung = Samsung.reduce((a, b) => a + b, 0);
   const avg_samsung = (sum_samsung / Samsung.length) || 0;
   console.log("Samsung_mean" + avg_samsung)

  createbarchart(avg_apple,avg_samsung)


  } catch (error) {
     // TODO: In case we have any errors
  }
 }
      
 fetch_northamerica();
 console.log("Apple", Apple);

function createbarchart(avg_apple,avg_samsung)  {
// Make a graph appear
// Trace1 for northamerica phone data
let trace1 =[ {
  x: ["Apple","Samsung"],
  y: [avg_apple, avg_samsung,],
  text: Apple,
  name: "Apple",
  type: "bar"
}]
Plotly.newPlot("barchart",trace1)

// Apply a title to the layout
let layout = {
  title: "Phone",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};
}

// Render the plot to the div tag with id "plot"
async function initApp() {

  await fetch_northamerica();
  // console.log("Apple" , Apple);

  return {
    init: () => Plotly.newPlot("plot", data, layout)
  };
}

initApp();