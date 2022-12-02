let key  = "2c9ff87d83e9f32015e010e1ed84d67e";
let container =document.getElementById("container");          // to append data in box
let iframe = document.getElementById("gmap_canvas");              //created reference

async function getWeatherData(){             //we get result
try{
    let city = document.getElementById("city").value;  //accepting data from dom/html part.
    let go = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)  //units or metics me $ use issliye ni kiye bcoz wo define variable ni hai
    let data = await go.json();               // data beh rha hai
    appendShowWheatherData(data);             //khilana qa hai to data
   
    }
    catch(err){
        console.log('err:', err)
    }
}

function appendShowWheatherData(d){  
    console.log('d:', d);             //we show result by connecting on funt to another function
    container.innerHTML = null;         //ek hi search ko repaet ni krega.
    //creating Hmtl elemnts in js

    let name = document.createElement("p");
    name.innerText = `City Name : ${d.name}`;                    // ye inner html hai ye name kha se uthaye ga wo dom se location do
   
    let temp = document.createElement("t");
    temp.innerText = `Temp-${d.main.temp}`;               //using template literals ex ${temperature} backtick chiye isko

    let pressure =document.createElement("pr");
    pressure.innerText = ` Pressure :${d.main.pressure}`;

    let humidity =document.createElement("h");
    humidity.innerText =` Humidity : ${d.main.humidity}`;  //these d.main.temp, presure , name  etc comes fron api data

    iframe.src=`https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;                     //convert string to backtick thrn literals will work
    container.append(name,temp,pressure,humidity);


}
