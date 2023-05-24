

function Writing() {
  document.getElementById("a1").textContent = "";
  const text = "Vai Vēlaties sākt projektu apskati? __>  ...   ";
  let index = 0;

  function writeText() {
    document.getElementById("buttond").style.display = "none"
    document.getElementById("a1").textContent += text.charAt(index);
    index++;
    if (index > text.length) {
      clearInterval(timer);
      document.getElementById("nextButton").style.display = "block";
    }
  }
  document.getElementById("nextButton").style.display = "none";

  const timer = setInterval(writeText, 10);
}


function Writing2() {
  document.getElementById("a1").textContent = "";
  const text = "Tulīt sāksim...";
  let index = 0;

  function writeText() {
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("a1").textContent += text.charAt(index);
    index++;
    if (index >= text.length) {
      clearInterval(timer);
      setTimeout(displayNextMessage, 1500);

    }
  }
  //Loading and div changes
  function displayNextMessage() {
    const interval = setInterval(function () {
      document.getElementById("a1").textContent += "████████████";
    }, 56);

    setTimeout(function () {
      clearInterval(interval);
      a1.textContent = "";
      var x = document.querySelectorAll(".everything");
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      };
      var boards = document.getElementsByClassName("board");
      for (var i = 0; i < boards.length; i++) {
        boards[i].style.display = "none";
      };

      var divs = document.querySelectorAll('.everything div');
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'flex';
      }

      var sec1 = document.querySelectorAll('.sec1');
      for (var i = 0; i < sec1.length; i++) {
        sec1[i].style.display = '';
      }

      var sec2 = document.querySelectorAll('.sec2');
      for (var i = 0; i < sec2.length; i++) {
        sec2[i].style.display = 'none';
      }

      var sec3 = document.querySelectorAll('.sec3');
      for (var i = 0; i < sec3.length; i++) {
        sec3[i].style.display = 'none';
      }

      var sec4 = document.querySelectorAll('.sec4');
      for (var i = 0; i < sec4.length; i++) {
        sec4[i].style.display = 'none';
      }

      var boardEnd = document.querySelectorAll('.boardEnd');
      for (var i = 0; i < boardEnd.length; i++) {
        boardEnd[i].style.display = '';
      }

      document.body.style.overflow = "hidden";


    }, 1000);
    document.getElementById("a1").textContent = "";
    let index = 0;
    const text = ""
    const timer = setInterval(() => {
      document.getElementById("a1").textContent += text.charAt(index);
      index++;
      if (index >= text.length) {
        clearInterval(timer);
      }
    },);
  }

  document.getElementById("nextButton").style.display = "none";
  const timer = setInterval(writeText, 10);
}

//Arrows
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#toggle-btn');
  const options = document.querySelector('.options');

  btn.addEventListener('click', () => {
    btn.querySelector('.arrow').classList.toggle('right');
    options.classList.toggle('active');
  });
});


function playSound(soundFile) {
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = soundFile;
  audioPlayer.play();
}

function playSound1(soundFile) {
  var audioPlayer = document.getElementById('audioPlayerStart');
  audioPlayer.src = soundFile;
  audioPlayer.play();
}


//buttons click

function changeColor(button) {

  var buttons = document.getElementsByClassName("wiggle-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("wiggle-button1");
    buttons[i].classList.add("wiggle-button2");
  }

  button.classList.remove("wiggle-button2");
  button.classList.add("wiggle-button1");

}

function playSound2() {
  var audio = document.getElementById("hover-sound");
  audio.play();
}

function playSound1() {
  var audio = document.getElementById("hover-soundStart");
  audio.play();
}

//divs change

function tglDivs(sectionNumber) {
  var sections = document.querySelectorAll('[class^="sec"]');

  for (var i = 0; i < sections.length; i++) {
    if (i + 1 === sectionNumber) {
      sections[i].style.display = 'block';
    } else {
      sections[i].style.display = 'none';
    }
  }
}