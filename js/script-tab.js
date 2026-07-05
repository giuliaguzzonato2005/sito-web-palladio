function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

if (cityName === "itinerari") {
    setTimeout(() => {
      initMap();
    }, 100);
  }
}

// mappa : if serve per evitare glicht della mappa

var map = null;

function initMap() {

    if (map) {
        setTimeout(() => map.invalidateSize(), 100);
        return;
    }

    map = L.map('map').setView([45.55, 11.55], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([45.5315, 11.5602]).addTo(map).bindPopup(`
    <b>Villa La Rotonda</b><br>
    <img src="img/rotonda.jpg" width="250">
    <a href="itinerario-primo.html" class="btn default" title="Vai all'itinerario">Vai all'itinerario</a>
`);
    L.marker([45.7116, 11.9913]).addTo(map).bindPopup("Villa Emo");
    L.marker([45.0304, 11.6399]).addTo(map).bindPopup("Villa Badoer");
    L.marker([45.42499, 12.33245]).addTo(map).bindPopup(`
    <b>Basilica del Redentore</b><br>
    <img src="img/redentore.jpg" width="250">
    <a href="itinerario-secondo.html" class="btn default" title="Vai all'itinerario">Vai all'itinerario</a>
`);
    L.marker([45.54695, 11.54793]).addTo(map).bindPopup(`
    <b>Basilica Palladiana</b><br>
    <img src="img/basilica-palladiana.jpg" width="250">
    <a href="itinerario-terzo.html" class="btn default" title="Vai all'itinerario">Vai all'itinerario</a>
`);
    L.marker([45.499364, 10.924019]).addTo(map).bindPopup(`
    <b>Villa Serego</b><br>
    <img src="img/villa-serego.jpg" width="250">
    <a href="itinerario-quarto.html" class="btn default" title="Vai all'itinerario">Vai all'itinerario</a>
`);
  
}

// seconda mappa, coordin ate prese dal sito unesco

var map = L.map('map2').setView([45.55, 11.55], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([45.5315, 11.5602]).addTo(map).bindPopup(`
    <b>Villa La Rotonda</b><br>
    <img src="img/rotonda.jpg" width="250">
`);

    L.marker([45.3075, 11.5598]).addTo(map).bindPopup(`
    <b>Villa Saraceno</b><br>
    <img src="img/saraceno.jpg" width="250">
`);

    L.marker([45.285392, 11.498256]).addTo(map).bindPopup(`
    <b>Villa Pojana</b><br>
    <img src="img/pojana.jpg" width="250">
`);

    L.marker([45.230515, 11.469639]).addTo(map).bindPopup(`
    <b>Villa Pisani- Montagnana</b><br>
    <img src="img/pisani.jpg" width="250">
`);

L.marker([45.357144, 11.371381]).addTo(map).bindPopup(`
    <b>Villa Pisani- Lonigo</b><br>
    <img src="img/pisani-lonigo.jpg" width="200">
`);
 
 L.marker([45.432275, 11.413113]).addTo(map).bindPopup(`
    <b>Barchesse di Villa Trissino</b><br>
    <img src="img/trissino.jpg" width="250">
`);




// Cascading Dropdown List PROVA 
var provinciaObject = {
  "Front-end": {
    "HTML": ["Links", "Images", "Tables", "Lists"],
    "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
    "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
  },
  "Back-end": {
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]
  }
}
window.onload = function() {
  var provinciaSel = document.getElementById("provincia");
  var comuneSel = document.getElementById("comune");
  var alfabeticoSel = document.getElementById("alfabetico");
  for (var x in provinciaObject) {
    provinciaSel.options[provinciaSel.options.length] = new Option(x, x);
  }
  provinciaSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    alfabeticoSel.length = 1;
    comuneSel.length = 1;
    //display correct values
    for (var y in provinciaObject[this.value]) {
      comuneSel.options[comuneSel.options.length] = new Option(y, y);
    }
  }
  comuneSel.onchange = function() {
    //empty Chapters dropdown
    alfabeticoSel.length = 1;
    //display correct values
    var z = provinciaObject[provinciaSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      alfabeticoSel.options[alfabeticoSel.options.length] = new Option(z[i], z[i]);
    }
  }
} 

// accordion 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}







