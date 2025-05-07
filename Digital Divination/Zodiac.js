//My API 
const apiUrl = 'https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test';
const apiKey = 'mmEUtLATc8w_UNnHuR2'; 

const params = new URLSearchParams(window.location.search);
const sign = params.get("sign");

const zodiacDescriptions = {
    "aries": {
      "personality": "Bold, ambitious, and passionate. Aries dives headfirst into challenges."
    },
    "taurus": {
      "personality": "Reliable, patient, and practical. Taurus enjoys the finer things in life."
    },
    "gemini": {
      "personality": "Curious, adaptable, and expressive. Gemini loves communication and variety."
    },
    "cancer": {
      "personality": "Sensitive, intuitive, and loyal. Cancer values emotional connection."
    },
    "leo": {
      "personality": "Confident, charismatic, and creative. Leo thrives in the spotlight."
    },
    "virgo": {
      "personality": "Analytical, meticulous, and helpful. Virgo enjoys organization and precision."
    },
    "libra": {
      "personality": "Diplomatic, fair, and charming. Libra seeks balance in all things."
    },
    "scorpio": {
      "personality": "Intense, mysterious, and powerful. Scorpio is deeply emotional and loyal."
    },
    "sagittarius": {
      "personality": "Adventurous, optimistic, and philosophical. Sagittarius loves exploring ideas."
    },
    "capricorn": {
      "personality": "Disciplined, responsible, and goal-oriented. Capricorn is a natural leader."
    },
    "aquarius": {
      "personality": "Innovative, independent, and humanitarian. Aquarius values progress and change."
    },
    "pisces": {
      "personality": "Empathetic, artistic, and dreamy. Pisces is deeply connected to emotions."
    }
};


async function fetchHoroscope(sign) {

  //This is going to get the local time 
  const now = new Date();
  const dateString = now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0');

  const url = `${apiUrl}?sign=${sign}&date=${dateString}&token=${apiKey}`;


  try {

    const response = await fetch(url); 

    if (!response.ok) {

      throw new Error(`HTTP error! status: ${response.status}`);
      
    }

    const data = await response.json();

    if (data.description) {
      const properCaseSign = sign.charAt(0).toUpperCase() + sign.slice(1);
      const personality = zodiacDescriptions[sign]?.personality || "No personality info available.";
    
      document.getElementById('horoscopeResult').innerHTML = `
        <p><strong>Sign:</strong> ${properCaseSign}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Mood:</strong> ${data.mood}</p>
        <p><strong>Lucky Time:</strong> ${data.lucky_time}</p>
        <p><strong>Lucky Color:</strong> ${data.color}</p>
        <p><strong>Lucky Number:</strong> ${data.lucky_number}</p>
        <hr>
        <h2>About ${properCaseSign}</h2>
        <p><strong>Personality:</strong> ${personality}</p>
      `;
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
