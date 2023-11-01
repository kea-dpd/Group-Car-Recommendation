const supabaseUrl = "https://wawlipofhliyhfyexijh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhd2xpcG9maGxpeWhmeWV4aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDMxMTUsImV4cCI6MjAxMjY3OTExNX0.yxQ1aLlYN7ia6ceBYoFR9jQmMn9rxHJXH9d8lYOzWm4";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

//const { data, error } = await supabase.from("NyVogn").select("*");

/* if (error) {
  console.error("Error fetching data:", error);
  return;
} */

/*fetch("https://wawlipofhliyhfyexijh.supabase.co", {
  method: "get",
  headers: {
    "x-apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhd2xpcG9maGxpeWhmeWV4aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDMxMTUsImV4cCI6MjAxMjY3OTExNX0.yxQ1aLlYN7ia6ceBYoFR9jQmMn9rxHJXH9d8lYOzWm4",
  },
})
  .then((response) => response.json())
  .then((data) => load(data)); */

const car_1 = document.getElementById("car_1");
const car_selected = document.querySelector(".car_selected");
const choose = document.querySelector(".choose");

function load() {
  document.querySelector("#pick_model").addEventListener("change", show);
}

function show() {
  if (this.value == "A1 Sportback") {
    showProducts();
    console.log("step 1");
  }
}

function showProducts() {
  document.querySelector(".picked").innerHTML = "";
  showProduct();
  console.log("step 2");
}

function showProduct(product) {
  const template = document.querySelector("#car").content;
  //make copy    true = inkludes children
  const copy = template.cloneNode(true);

  /* //change content
  document.querySelector("h2").textContent = product.Model;
  //document.querySelector(".car_pic").src = `img/${product.img}`;
  document.querySelector(".price").textContent = product.Pris + " DKK";
  //document.querySelector(".car_dev").textContent = product.Beskrivelse + " Read More";
  document.querySelector(".specs").textContent = product.portions + " pers.";

  //append (put in)
  document.querySelector("main").appendChild(copy); */

  console.log("step 3");
}
