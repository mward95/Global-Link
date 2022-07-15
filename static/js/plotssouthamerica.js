// js goes here
// Initialized arrays
let Xiaomi = []
let Samsung = []
const getXiaomiData = (southamericaData) => {

  if (!southamericaData?.length) {
    return null;
  }
  console.log(southamericaData?.length)
  for (let index = 0; index < southamericaData?.length; index++) {
  const southamerica = southamericaData[index];
  console.log(southamerica)
  Xiaomi.push(southamerica["Xiaomi"])
  Samsung.push(southamerica["Samsung"])
 }
}
const fetch_southamerica = async () => {

  try {
   const data = await  fetch("/api/southamerica").then((res) => res.json());

   getXiaomiData(data);
  //  Xiaomi
   const sum_Xiaomi = Xiaomi.reduce((a, b) => a + b, 0);
   const avg_Xiaomi = (sum_Xiaomi / Xiaomi.length) || 0;
   console.log("Xiaomi_mean" + avg_Xiaomi)

  // Samsung
   const sum_samsung = Samsung.reduce((a, b) => a + b, 0);
   const avg_samsung = (sum_samsung / Samsung.length) || 0;
   console.log("Samsung_mean" + avg_samsung)

  createbarchart(avg_Xiaomi,avg_samsung)

  } catch (error) {
     // TODO: In case we have any errors
  }
 }
      
 fetch_southamerica();
 console.log("Xiaomi", Xiaomi);

function createbarchart(avg_Xiaomi,avg_samsung)  {
// Make a graph appear
// Trace1 for southamerica phone data
let trace1 =[ {
  x: ["Xiaomi","Samsung"],
  y: [avg_Xiaomi, avg_samsung,],
  text: Xiaomi,
  name: "Xiaomi",
  type: "bar"
}]
Plotly.newPlot("barchart",trace1)

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

  await fetch_southamerica();
  // console.log("Xiaomi" , Xiaomi);

  return {
    init: () => Plotly.newPlot("plot", data, layout)
  };
}


initApp();