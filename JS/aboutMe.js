function skill(id) {
  if (document.getElementById(id).style.display === "block") {
    document.getElementById(id).style.display = "none";
    document.getElementById(id + "B").style.borderColor = "transparent";
    return;
  }

  var divs = ["skill", "edu", "exp"];

  for (let index = 0; index < divs.length; index++) {
    document.getElementById(divs[index]).style.display = "none";
    document.getElementById(divs[index] + "B").style.borderColor =
      "transparent";
  }

  document.getElementById(id).style.display =
    document.getElementById(id).style.display === "block" ? "none" : "block";

  document.getElementById(id + "B").style.borderColor =
    document.getElementById(id + "B").style.borderColor === "#ffc73c"
      ? "transparent"
      : "#ffc73c";
}

document.getElementById("msg").addEventListener("keyup", function () {
  var count = $("textarea#msg").val();
  $("#current").text(count.length);
});

function sendMail() {
  var link = "mailto:" + $("#email").val() +
  "?cc=''" +
    "&subject=" +
    encodeURIComponent(`A mail from: ` + $("#name").val()) +
    "&body=" +
    $("#msg").val();

  console.log(link);
  window.location.href = link;
}
