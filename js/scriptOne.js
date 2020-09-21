$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#myNavBar").collapse("hide");
    }
  });
});

(function (global) {
  var dc = {};

  var homeHtmlUrl = "WebPages/index-snippet.html";
  var aboutUsUrl = "WebPages/AboutUs.html";
  var contactUsUrl = "WebPages/ContactUs.html";

  var roomUrl = "WebPages/Rooms.html";
  var servicelUrl = "WebPages/Service.html";
  var offersUrl = "WebPages/Offers.html";

  var vtUrl = "WebPages/Vt.html";

  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string.replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  };

  /*var switchMenuToActive = function () {
    var classes = document.querySelector("#navHomeButton").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#navHomeButton").className = classes;

    classes = document.querySelector("#navMenuButton").className;
    if (classes.indexOf("active") === -1) {
      classes += " active";
      document.querySelector("#navMenuButton").className = classes;
    }
  };*/

  // On page load (before images or CSS)
  /*dc.jsAboutus = function (event) {
    var nodes = document.getElementById("menu-toc").childNodes;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeName.toLowerCase() == "li") {
        node[i].classList.remove("menu-toc-current");
      }
    }
    var li = document.getElementById("idAboutUs");
    li.classList.add("menu-toc-current");
  };*/
  document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("#glHome");

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (responseText) {
        document.querySelector("#glHome").innerHTML = responseText;
      },
      false
    );
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    $ajaxUtils.sendGetRequest(
      aboutUsUrl,
      function (responseText) {
        document.querySelector("#glAboutUs").innerHTML = responseText;
      },
      false
    );
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    $ajaxUtils.sendGetRequest(
      roomUrl,
      function (responseText) {
        document.querySelector("#glRooms").innerHTML = responseText;
      },
      false
    );
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    $ajaxUtils.sendGetRequest(
      servicelUrl,
      function (responseText) {
        document.querySelector("#glServices").innerHTML = responseText;
      },
      false
    );
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    $ajaxUtils.sendGetRequest(
      offersUrl,
      function (responseText) {
        document.querySelector("#glOffers").innerHTML = responseText;
      },
      false
    );
  });
  document.addEventListener("DOMContentLoaded", function (event) {
    $ajaxUtils.sendGetRequest(
      vtUrl,
      function (responseText) {
        document.querySelector("#glVT").innerHTML = responseText;
      },
      false
    );
  });
  document.addEventListener("DOMContentLoaded", function (event) {
    $ajaxUtils.sendGetRequest(
      contactUsUrl,
      function (responseText) {
        document.querySelector("#glContact").innerHTML = responseText;
      },
      false
    );
  });

  global.$dc = dc;
})(window);
