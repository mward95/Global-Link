// js goes here
// Initialized arrays
let Apple = []
let Samsung = []
let Huawei = []
let Xiaomi = []
const getAppleData = (europeData) => {

  if (!europeData?.length) {
    return null;
  }
  console.log(europeData?.length)
  for (let index = 0; index < europeData?.length; index++) {
  const europe = europeData[index];
  console.log(europe)
  Apple.push(europe["Apple"])
  Samsung.push(europe["Samsung"])
  Huawei.push(europe["Huawei"])
  Xiaomi.push(europe["Xiaomi"])
 }
}
const fetch_europe = async () => {

  try {
   const data = await  fetch("/api/europe").then((res) => res.json());

   getAppleData(data);
  //  apple
   const sum_apple = Apple.reduce((a, b) => a + b, 0);
   const avg_apple = (sum_apple / Apple.length) || 0;
   console.log("Apple_mean" + avg_apple)
  // Samsung
   const sum_samsung = Samsung.reduce((a, b) => a + b, 0);
   const avg_samsung = (sum_samsung / Samsung.length) || 0;
   console.log("Samsung_mean" + avg_samsung)

  // Huawei
   const sum_Huawei = Huawei.reduce((a, b) => a + b, 0);
   const avg_Huawei = (sum_Huawei / Huawei.length) || 0;
   console.log("Huawei_mean" + avg_Huawei)

  // Xiaomi
   const sum_xiaomi = Xiaomi.reduce((a, b) => a + b, 0);
   const avg_xiaomi = (sum_xiaomi / Xiaomi.length) || 0;
   console.log("Xiaomi_mean" + avg_xiaomi)

  createbarchart(avg_apple,avg_samsung,avg_Huawei,avg_xiaomi)


  } catch (error) {
     // TODO: In case we have any errors
  }
 }
      
 fetch_europe();
 console.log("Apple", Apple);

function createbarchart(avg_samsung,avg_apple,avg_xiaomi,avg_Huawei)  {
// Make a graph appear
// Trace1 for europe phone data
let trace1 =[ {
  x: ["Samsung","Apple","Xiaomi","Huawei"],
  y: [avg_apple, avg_samsung, avg_Huawei, avg_xiaomi],
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

  await fetch_europe();
  // console.log("Apple" , Apple);

  return {
    init: () => Plotly.newPlot("plot", data, layout)
  };
}


initApp();