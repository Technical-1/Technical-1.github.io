function toggleDropdown() {
  document.getElementById('searchBox').classList.toggle('show');
}
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('content');
  filter = input.value.toUpperCase();
  div = document.getElementById('searchBox');
  a = div.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    }else {
      a[i].style.display = 'none';
    }
  }
}
function readMore(dotNum, moreNum, seeMoreNum) {
  var dots = document.getElementById(dotNum);
  var moreText = document.getElementById(moreNum);
  var btnText = document.getElementById(seeMoreNum);

  if (btnText.innerHTML === "Read less") {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    moreText.style.fontSize = "20px";
  }
}
function toggleShare() {
  var x = document.getElementById("shareYourVoice");
  var y = document.getElementById("share");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    x.reset();
  }
  return false;
}
function toggleButton(stanceInfo, stanceBtn) {
  var x = document.getElementById(stanceInfo);
  var y = document.getElementById(stanceBtn);
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline";
  }
}

function openCharity(){
  var win = window.open("https://charity.gofundme.com/o/en/campaign/myvoteproject2020", '_blank');
  win.focus();
}

function openVolunteer(){
  var win = window.open("https://docs.google.com/forms/d/e/1FAIpQLSdVf76uJ8DJf3q3Qco4BC_ED1mfoCQDMuZr-q5K55g7RD5y_g/viewform", '_blank');
  win.focus();
}

function openExperience(){
  var win = window.open("https://docs.google.com/forms/d/e/1FAIpQLSd-NzJJ76k5WhcnSyqYdq52cieuyNDSyUwpzqxcuw0iFQDHKg/viewform", '_blank');
  win.focus();
}

function closePopup(){
  var x = document.getElementById("hover_bkgr_fricc");
  x.style.display = "none";
}
