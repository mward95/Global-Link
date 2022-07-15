// js goes here
// Initialized arrays
let Apple = []
let Samsung = []
let Tecno = []
let Xiaomi = []
const getAppleData = (africaData) => {

  if (!africaData?.length) {
    return null;
  }
  console.log(africaData?.length)
  for (let index = 0; index < africaData?.length; index++) {
  const africa = africaData[index];
  console.log(africa)
  Apple.push(africa["Apple"])
  Samsung.push(africa["Samsung"])
  Tecno.push(africa["Tecno"])
  Xiaomi.push(africa["Xiaomi"])
 }
}
const fetch_africa = async () => {

  try {
   const data = await  fetch("/api/africa").then((res) => res.json());

   getAppleData(data);
  //  apple
   const sum_apple = Apple.reduce((a, b) => a + b, 0);
   const avg_apple = (sum_apple / Apple.length) || 0;
   console.log("Apple_mean" + avg_apple)
  // Samsung
   const sum_samsung = Samsung.reduce((a, b) => a + b, 0);
   const avg_samsung = (sum_samsung / Samsung.length) || 0;
   console.log("Samsung_mean" + avg_samsung)

  // Tecno
   const sum_tecno = Tecno.reduce((a, b) => a + b, 0);
   const avg_tecno = (sum_tecno / Tecno.length) || 0;
   console.log("Tenco_mean" + avg_tecno)

  // Xiaomi
   const sum_xiaomi = Xiaomi.reduce((a, b) => a + b, 0);
   const avg_xiaomi = (sum_xiaomi / Xiaomi.length) || 0;
   console.log("Xiaomi_mean" + avg_xiaomi)

  createbarchart(avg_apple,avg_samsung,avg_tecno,avg_xiaomi)


  } catch (error) {
     // TODO: In case we have any errors
  }
 }
      
 fetch_africa();
 console.log("Apple", Apple);

function createbarchart(avg_apple,avg_samsung,avg_tecno, avg_xiaomi)  {
// Make a graph appear
// Trace1 for africa phone data
let trace1 =[ {
  x: ["Apple","Samsung","Tecno","Xiaomi"],
  y: [avg_apple, avg_samsung, avg_tecno, avg_xiaomi],
  text: Apple,
  name: "Apple",
  type: "bar"
}]
Plotly.newPlot("barchart",trace1)
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

  await fetch_africa();
  // console.log("Apple" , Apple);

  return {
    init: () => Plotly.newPlot("plot", data, layout)
  };
}


initApp();