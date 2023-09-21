document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content) {
        content.classList.toggle("show");
      }
    });
  }
  
  var qsup = document.getElementsByClassName("Sup");
  var runsup = document.getElementsByClassName("SorryUnsup");
  var qdata = document.getElementsByClassName("Data");
  var qitype = document.getElementsByClassName("ImLab");
  var rimd = document.getElementsByClassName("ImVal");
  var rimc = document.getElementsByClassName("ImClass");
  var qdtype = document.getElementsByClassName("DaLab");
  var rdc = document.getElementsByClassName("DaCat");
  var qdmem = document.getElementsByClassName("Time");
  var rdp = document.getElementsByClassName("DaMem");
  var rdd = document.getElementsByClassName("DaCal");
  
  const Button = document.getElementById("Generative");
  Button.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Gen");
    const show = document.querySelectorAll(".SorryGen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button2 = document.getElementById("NGenerative");
  Button2.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Gen");
    const show = document.querySelectorAll(".Sup");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button3 = document.getElementById("Unlabled");
  Button3.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Sup");
    const show = document.querySelectorAll(".SorryUnsup");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button4 = document.getElementById("Labeled");
  Button4.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Sup");
    const show = document.querySelectorAll(".Data");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button5 = document.getElementById("Images");
  Button5.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Data");
    const show = document.querySelectorAll(".ImLab");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button6 = document.getElementById("ImValue");
  Button6.addEventListener("click", () => {
    const hide = document.querySelectorAll(".ImLab");
    const show = document.querySelectorAll(".ImVal");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button7 = document.getElementById("ImCategory");
  Button7.addEventListener("click", () => {
    const hide = document.querySelectorAll(".ImLab");
    const show = document.querySelectorAll(".ImClass");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button8 = document.getElementById("Numbers");
  Button8.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Data");
    const show = document.querySelectorAll(".DaLab");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button9 = document.getElementById("DaCategory");
  Button9.addEventListener("click", () => {
    const hide = document.querySelectorAll(".DaLab");
    const show = document.querySelectorAll(".DaCat");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button10 = document.getElementById("DaValue");
  Button10.addEventListener("click", () => {
    const hide = document.querySelectorAll(".DaLab");
    const show = document.querySelectorAll(".Time");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button11 = document.getElementById("Memory");
  Button11.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Time");
    const show = document.querySelectorAll(".DaMem");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button12 = document.getElementById("NoMemory");
  Button12.addEventListener("click", () => {
    const hide = document.querySelectorAll(".Time");
    const show = document.querySelectorAll(".DaVal");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";
    });
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
  });

  const Button13 = document.getElementById("retry");
  Button13.addEventListener("click", () => {
    const hide = document.querySelectorAll(".SorryGen");
    const show = document.querySelectorAll(".Gen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";});
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
});

  const Button14 = document.getElementById("retry2");
  Button14.addEventListener("click", () => {
    const hide = document.querySelectorAll(".SorryUnsup");
    const show = document.querySelectorAll(".Gen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";});
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
});

  const Button15 = document.getElementById("retry3");
  Button15.addEventListener("click", () => {
    const hide = document.querySelectorAll(".ImVal");
    const show = document.querySelectorAll(".Gen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";});
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
});

  const Button16 = document.getElementById("retry4");
  Button16.addEventListener("click", () => {
    const hide = document.querySelectorAll(".ImClass");
    const show = document.querySelectorAll(".Gen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";});
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
});

  const Button17 = document.getElementById("retry5");
  Button17.addEventListener("click", () => {
    const hide = document.querySelectorAll(".DaCat");
    const show = document.querySelectorAll(".Gen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";});
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
});

  const Button18 = document.getElementById("retry6");
  Button18.addEventListener("click", () => {
    const hide = document.querySelectorAll(".DaMem");
    const show = document.querySelectorAll(".Gen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";});
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
});

  const Button19 = document.getElementById("retry7");
  Button19.addEventListener("click", () => {
    const hide = document.querySelectorAll(".DaVal");
    const show = document.querySelectorAll(".Gen");
    hide.forEach(hideElement => {
        hideElement.style.display = "none";});
    show.forEach(showElement => {
        showElement.style.display = "block";
    });
});

});