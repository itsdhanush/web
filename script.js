function showMore() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("readMoreBtn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }
  