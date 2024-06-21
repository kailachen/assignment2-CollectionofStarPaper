filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("BtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



function sortByColor() {
  const colorsOrder = ['white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const container = document.querySelector('.starpaper-container');
  const items = Array.from(container.getElementsByClassName('starpaper'));

  // Sort items based on the color order
  items.sort((a, b) => {
      const aColor = colorsOrder.indexOf([...a.classList].find(c => colorsOrder.includes(c)));
      const bColor = colorsOrder.indexOf([...b.classList].find(c => colorsOrder.includes(c)));
      return aColor - bColor;
  });

  // Append items back to the container in sorted order
  items.forEach(item => container.appendChild(item));
}

function sortAlphabetically() {
  const container = document.querySelector('.starpaper-container');
  const items = Array.from(container.getElementsByClassName('starpaper'));

  // Sort items based on the alphabetical order of the alt attribute of the img tag
  items.sort((a, b) => {
      const aText = a.querySelector('img').alt.toLowerCase();
      const bText = b.querySelector('img').alt.toLowerCase();
      return aText.localeCompare(bText);
  });

  // Append items back to the container in sorted order
  items.forEach(item => container.appendChild(item));
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("BtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
}




document.querySelectorAll('.starpaper img').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.getElementById('imageOverlay');
        const overlayImage = overlay.querySelector('img');
        overlayImage.src = this.src;
        overlay.style.display = 'flex';
    });
});

function closeOverlay() {
    document.getElementById('imageOverlay').style.display = 'none';
}


// menu for mobile
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }