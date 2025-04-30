//My API 
const apiUrl = 'https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test';
const apiKey = 'mmEUtLATc8w_UNnHuR2'; 

const params = new URLSearchParams(window.location.search);
const sign = params.get("sign");

async function fetchHoroscope(sign) {

  //I can change the time of the result, base on daily, weekly or monthly
  const date = 'today';
  const url = `${apiUrl}?sign=${sign}&date=${date}&token=${apiKey}`;

  try {
    const response = await fetch(url); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.description) {

      document.getElementById('horoscopeResult').innerHTML = `
        <p><strong>Sign:</strong> ${sign.charAt(0).toUpperCase() + sign.slice(1)}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Mood:</strong> ${data.mood}</p>
        <p><strong>Lucky Time:</strong> ${data.lucky_time}</p>
        <p><strong>Lucky Color:</strong> ${data.color}</p>
        <p><strong>Lucky Number:</strong> ${data.lucky_number}</p>
      `;

    } else {

      document.getElementById('horoscopeResult').innerHTML = `<p>Error: Horoscope data not available.</p>`;

    }
  } catch (error) {

    console.error('Error fetching horoscope:', error);
    document.getElementById('horoscopeResult').innerHTML = `<p>Error fetching data. Please try again later.</p>`;

  }
}

//When user selected their zodiac sign, the result will be showned
  if (sign) {

    fetchHoroscope(sign);

  } else {

    document.getElementById('horoscopeResult').innerHTML = `<p>Error: No sign specified in URL.</p>`;

  }
