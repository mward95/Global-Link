// js goes here
// Initialized arrays
let Apple = []
let Samsung = []
let Tecno = []
let Huawei = []
const getAppleData = (europeData) => {

  if (!europeData?.length) {
    return null;
  }

 for (let index = 0; index < europeData?.length; index++) {
  const europe = europeData[index];

  Apple.push(europe["Apple"])
  Samsung.push(europe["Samsung"])
  Tecno.push(europe["Tecno"])
  Xiaomi.push(europe["Huawei"])
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

  // Tecno
   const sum_tecno = Tecno.reduce((a, b) => a + b, 0);
   const avg_tecno = (sum_tecno / Tecno.length) || 0;
   console.log("Tenco_mean" + avg_tecno)

  // Huawei
   const sum_huawei = Huawei.reduce((a, b) => a + b, 0);
   const avg_huawei = (sum_huawei / Huawei.length) || 0;
   console.log("Huawei_mean" + avg_huawei)

  createbarchart(avg_apple,avg_samsung,avg_tecno,avg_huawei)


  } catch (error) {
     // TODO: In case we have any errors
  }
 }
      
 fetch_europe();
 console.log("Apple", Apple);

function createbarchart(avg_apple,avg_samsung,avg_tecno, avg_huawei)  {
// Make a graph appear
// Trace1 for phone data
let trace2 =[ {
  x: ["Apple","Samsung","Tecno","Huawei"],
  y: [avg_apple, avg_samsung, avg_tecno, avg_huawei],
  text: Apple,
  name: "Apple",
  type: "bar"
}]
Plotly.newPlot("barchart",trace2)

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
  console.log("Apple" , Apple);

  return {
    init: () => Plotly.newPlot("plot", data, layout)
  };
}


initApp();