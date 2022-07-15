// js goes here
// Initialized arrays
let Apple = []
let Samsung = []
let Huawei = []
let Oppo = []
let Xiaomi = []
let Vivo = []
let Unknown = []

const getAppleData = (asiaData) => {

  if (!asiaData?.length) {
    return null;
  }
  console.log(asiaData?.length)
  for (let index = 0; index < asiaData?.length; index++) {
  const asia = asiaData[index];
  console.log(asia)
  Apple.push(asia["Apple"])
  Samsung.push(asia["Samsung"])
  Huawei.push(asia["Huawei"])
  Oppo.push(asia["Oppo"])
  Xiaomi.push(asia["Xiaomi"])
  Vivo.push(asia["Vivo"])
  Unknown.push(asia["Unknown"])
 }
}
const fetch_asia = async () => {

  try {
   const data = await  fetch("/api/asia").then((res) => res.json());

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

  // Oppo
   const sum_Oppo = Oppo.reduce((a, b) => a + b, 0);
   const avg_Oppo = (sum_Oppo / Oppo.length) || 0;
   console.log("Oppo_mean" + avg_Oppo)

  // Xiaomi
  const sum_Xiaomi = Xiaomi.reduce((a, b) => a + b, 0);
  const avg_Xiaomi = (sum_Xiaomi / Xiaomi.length) || 0;
  console.log("Xiaomi_mean" + avg_Xiaomi)

  // Vivo
  const sum_Vivo = Vivo.reduce((a, b) => a + b, 0);
  const avg_Vivo = (sum_Vivo / Vivo.length) || 0;
  console.log("Vivo_mean" + avg_Vivo)

  // Unknown
  const sum_Unknown = Unknown.reduce((a, b) => a + b, 0);
  const avg_Unknown = (sum_Unknown / Unknown.length) || 0;
  console.log("Unknown_mean" + avg_Unknown)

  createbarchart(avg_apple,avg_samsung,avg_Huawei,avg_Oppo,avg_Xiaomi,avg_Vivo,avg_Unknown)

  } catch (error) {
     // TODO: In case we have any errors
  }
 }
      
 fetch_asia();
 console.log("Apple", Apple);

function createbarchart(avg_samsung,avg_apple,avg_Oppo,avg_Huawei,avg_Xiaomi,avg_Vivo,avg_Unknown)  {
// Make a graph appear
// Trace1 for asia phone data
let trace1 =[ {
  x: ["Samsung","Apple","Oppo","Huawei","Xiaomi","Vivo","Unknown"],
  y: [avg_apple, avg_samsung, avg_Huawei, avg_Oppo,avg_Xiaomi,avg_Vivo,avg_Unknown],
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

  await fetch_asia();
  // console.log("Apple" , Apple);

  return {
    init: () => Plotly.newPlot("plot", data, layout)
  };
}

initApp();