
  // js tampilan slider 1 section 2
$(document).ready(function(){
    $('.slider.slidersatu').slick({
    //   dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]



    });
  });

  // js tampilan slider 2 section 2

  $(document).ready(function(){
    $('.slider.sliderdua').slick({
      // dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


    });
  });

  $(document).ready(function(){
    $('.slider.sliderdua-mobile').slick({
    //   dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]



    });
  });

  // js tampilan slider btn7-mobile section 2

  $(document).ready(function(){
    $('.slider.sliderbtn').slick({
      // dots: true,
      // autoplay: true,
      // autoplaySpeed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });
  

  // js tampilan vertikal hovarable tabs menu promo
  function openPromo(evt, promoName) {
    var i, tabcontent, dropbtn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    dropbtn = document.getElementsByClassName("dropbtn");
    for (i = 0; i < dropbtn.length; i++) {
      dropbtn[i].className = dropbtn[i].className.replace(" active", "");
    }
    document.getElementById(promoName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // sidenav mobile
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// sidenav dropdown menu
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

// callcenter-salescenter-mobile
function openPage(pageName,elmnt,color) {
  var i, tabcontents, tablinks;
  tabcontents = document.getElementsByClassName("tab-contact-content");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-contact-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();


// Robot omni

var modal = document.getElementById("BT-CFM-showchat");

var btn = document.getElementById("jagbutton");

var span = document.getElementsByClassName("BT-CFM-closeChoice")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}