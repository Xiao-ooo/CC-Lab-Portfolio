
const myWeatherKey = "0ef8fe13039645a43bcfe4f879880028";
const weatherPath = 
"https://api.openweathermap.org/data/2.5/weather" + //root url
"?lat=40.7"+ //latitude
"&lon=-74"+ //longitude
"&units=imperial"+ //units
"&appid=0"; //key


// fetch ("./test.JSON")
//     .then(response => response.json())
//     .then(handleParsedData)
//     .catch(handleError)


fetch (weatherPath + myWeatherKey)
    .then(response => response.json())
    .then(handleParsedData)
    .catch(handleError)


    function handleParsedData(data){

        console.log(data);
        const myHeader = document.createElement("h1");
        myHeader.textContent = "Feels like:" + data.main.feels_like;
        document.body.appendChild(myHeader);
    }


    function handleError(error){

        console.log("error");

    }