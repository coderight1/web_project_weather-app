const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer'); 

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Please write the name before search`;
    data_hide.classList.add('data_hide');
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9b38d9c3529b2700db0288e523563422`;
      const response = await fetch(url);
      const data =await response.json();
      const arrdata = [data];
      city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
    //   console.log(data);
    temp.innerText= arrdata[0].main.temp-(273.15);
    // temp_status.innerText = arrdata[0].weather[0].main;
    const tempMood = arrdata[0].weather[0].main;
    if(tempMood =="Clear"){
      temp_status.innerHTML = 
      '<i class="fa-solid fa-sun"></i>'
    }
    else if(tempMood =="Clouds"){
      temp_status.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    }
    else if(tempMood =="Rain"){
      temp_status.innerHTML = '<i class="fa-solid fa-raindrops"></i>'
    }
    else if(tempMood =="Haze"){
      temp_status.innerHTML = '<i class="fa-solid fa-sun-haze"></i>'
    }
    else{
      temp_status.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    data_hide.classList.remove('data_hide');
    
  } catch {
    city_name.innerText = `Please write the name of the city properly`;
    data_hide.classList.add('data_hide');
  }
  }
}

submitBtn.addEventListener('click', getInfo);


