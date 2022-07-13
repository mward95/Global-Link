// js goes here
// Initialized arrays
let Apple = []
// let greekNames = []
// let romanNames = []
// let greekSearchResults = []
// let romanSearchResults = []

const getAppleData = (africaData) => {

  if (!africaData?.length) {
    return null;
  }


 for (let index = 0; index < africaData?.length; index++) {
  const africa = africaData[index];

  Apple.push(africa["Apple"])
 }

}

const fetch_africa = async () => {

  try {
   const data = await  fetch("/api/africa").then((res) => res.json());

   getAppleData(data);
 

 
  //  //console.log("Data: ", data);
  } catch (error) {
     // TODO: In case we have any errors
  }
 
 }
      
 
 fetch_africa();
 console.log("Apple: ", Apple);



// Trace1 for the Greek Data
// let trace1 = {
//   x: names,
//   // y: greekSearchResults,
//   text: greekNames,
//   name: "Apple",
//   type: "bar"
// };

// Trace 2 for the Roman Data
// let trace2 = {
//   x: names,
//   y: romanSearchResults,
//   text: romanNames,
//   name: "Roman",
//   type: "bar"
// };

// Create data array
// let data = [trace1, trace2];

// Apply a title to the layout
// let layout = {
//   title: "Phone",
//   barmode: "group",
//   // Include margins in the layout so the x-tick labels display correctly
//   margin: {
//     l: 50,
//     r: 50,
//     b: 200,
//     t: 50,
//     pad: 4
//   }
// };




// Render the plot to the div tag with id "plot"
async function initApp() {

  await fetch_africa();
  console.log("Apple", Apple);

  return {
    init: () => Plotly.newPlot("plot", data, layout)
  };
}


initApp().init();