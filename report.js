let menu = document.querySelector("#menu-icon");
let menuContent = document.querySelector(".menu-content");
let hamburgerMenu = document.querySelector(".harmburger-menu");

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents window click from closing menu
  menuContent.classList.toggle("active"); // Toggle menu visibility
  
  if (menuContent.classList.contains("active")) {
    menu.src = "/images/icons8-close-window-50.png";
  } else {
    menu.src = "/images/align-justify-svgrepo-com.svg";
  }
  console.log("Menu clicked. Active status:", menuContent.classList.contains("active"));
});

// Detect clicks outside the menu to close it
window.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !menuContent.contains(e.target) && menuContent.classList.contains("active")) {
    menuContent.classList.remove("active");
    menu.src = "/images/align-justify-svgrepo-com.svg";
    // console.log("Clicked outside. Menu closed.");
  }
});

document.querySelector('#as-a-witness').addEventListener('click', (e)=>{
  e.preventDefault()

  document.querySelector('#witness-form').style.display = 'block';
  document.querySelector('#victim-form').style.display = 'none';
})
document.querySelector('#as-a-victim').addEventListener('click', (e)=>{
  e.preventDefault()

  document.querySelector('#witness-form').style.display = 'none';
  document.querySelector('#victim-form').style.display = 'block';
})

const coastalRegion = [
  {
      county: "Mombasa",
      subCounties: [
          {
              name: "Mvita",
              wards: ["Majengo", "Tudor", "Tononoka", "Shimanzi/Ganjoni", "Mji wa Kale/Makadara"]
          },
          {
              name: "Nyali",
              wards: ["Frere Town", "Kongowea", "Kadzandani"]
          },
          {
              name: "Kisauni",
              wards: ["Mwakirunge", "Bamburi", "Junda"]
          },
          {
              name: "Likoni",
              wards: ["Likoni", "Mtongwe", "Shika Adabu", "Bofu"]
          },
          {
              name: "Changamwe",
              wards: ["Chaani", "Port Reitz"]
          },
          {
              name: "Jomvu",
              wards: ["Jomvu Kuu", "Miritini", "Mikindani"]
          }
      ]
  },
  {
      county: "Kwale",
      subCounties: [
          {
              name: "Matuga",
              wards: ["Tiwi", "Waa", "Tsimba/Golini"]
          },
          {
              name: "Msambweni",
              wards: ["Ukunda", "Gombato/Bongwe", "Ramisi"]
          },
          {
              name: "Kinango",
              wards: ["Puma", "Ndavaya", "Mackinnon Road", "Kinango"]
          },
          {
              name: "Lunga Lunga",
              wards: ["Vanga", "Dzombo", "Pongwe/Kikoneni", "Mwereni"]
          }
      ]
  },
  {
      county: "Kilifi",
      subCounties: [
          {
              name: "Kilifi North",
              wards: ["Sokoni", "Tezo", "Kibarani", "Matsangoni"]
          },
          {
              name: "Kilifi South",
              wards: ["Mwarakaya", "Junju", "Shimo la Tewa", "Chasimba"]
          },
          {
              name: "Malindi",
              wards: ["Shella", "Ganda", "Kakuyuni"]
          },
          {
              name: "Magarini",
              wards: ["Gongoni", "Marafa", "Adu", "Sabaki"]
          },
          {
              name: "Kaloleni",
              wards: ["Mariakani", "Mwanamwinga", "Kaloleni"]
          },
          {
              name: "Rabai",
              wards: ["Mwawesa", "Ruruma", "Rabai/Kisurutini"]
          }
      ]
  },
  {
      county: "Tana River",
      subCounties: [
          {
              name: "Bura",
              wards: ["Madogo", "Bura", "Chewele"]
          },
          {
              name: "Galole",
              wards: ["Mikinduni", "Wayu", "Kinakomba"]
          },
          {
              name: "Garsen",
              wards: ["Kipini West", "Kipini East", "Garsen North", "Garsen Central"]
          }
      ]
  },
  {
      county: "Lamu",
      subCounties: [
          {
              name: "Lamu West",
              wards: ["Bahari", "Mkomani", "Shella", "Hindi"]
          },
          {
              name: "Lamu East",
              wards: ["Faza", "Kiunga"]
          }
      ]
  },
  {
      county: "Taita Taveta",
      subCounties: [
          {
              name: "Voi",
              wards: ["Kaloleni", "Ngolia", "Kasigau"]
          },
          {
              name: "Taveta",
              wards: ["Mahoo", "Mata", "Chala"]
          },
          {
              name: "Wundanyi",
              wards: ["Werugha", "Wundanyi/Mbale", "Mwanda/Mghange"]
          },
          {
              name: "Mwatate",
              wards: ["Mwatate", "Bura"]
          }
      ]
  }
];

// Get the data from the coastalRegion array
const counties = coastalRegion.map(item => item.county);
const subCounties = coastalRegion.flatMap(item => item.subCounties.map(sub => ({
  county: item.county,
  name: sub.name,
  wards: sub.wards
})));
const wards = subCounties.flatMap(item => item.wards.map(ward => ({
  county: item.county,
  subCounty: item.name,
  name: ward
})));

// Get the HTML elements
const countySelect = document.getElementById('county');
const subCountySelect = document.getElementById('sub-county');
const wardSelect = document.getElementById('location');

// Populate the county dropdown
counties.forEach(county => {
  const option = document.createElement('option');
  option.value = county;
  option.text = county;
  countySelect.add(option);
});

// Update sub-county dropdown based on selected county
countySelect.addEventListener('change', () => {
  const selectedCounty = countySelect.value;
  const filteredSubCounties = subCounties.filter(item => item.county === selectedCounty);

  subCountySelect.innerHTML = '<option value="">Sub-county</option>';
  filteredSubCounties.forEach(item => {
    const option = document.createElement('option');
    option.value = item.name;
    option.text = item.name;
    subCountySelect.add(option);
  });

  wardSelect.innerHTML = '<option value="">Ward</option>'; // Reset ward dropdown
});

// Update ward dropdown based on selected sub-county
subCountySelect.addEventListener('change', () => {
  const selectedCounty = countySelect.value;
  const selectedSubCounty = subCountySelect.value;
  const filteredWards = wards.filter(item => item.county === selectedCounty && item.subCounty === selectedSubCounty);

  wardSelect.innerHTML = '<option value="">Ward</option>';
  filteredWards.forEach(item => {
    const option = document.createElement('option');
    option.value = item.name;
    option.text = item.name;
    wardSelect.add(option);
  });
});





