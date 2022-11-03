const url = `http://localhost:3000`;
const rate = 5

// const iframe = document.getElementById("iframe");
// const iframe1 = document.getElementById("iframe1");
// const iframe2 = document.getElementById("iframe2");
// iframe.src =`${url}/d/vRze2DVVk/wmi-dashboard?orgId=1&refresh=${rate}s&kiosk`;
// iframe1.src =`${url}/d/xr24zJ44k/ist-files?orgId=1&refresh=${rate}s&kiosk`;
// iframe2.src =`${url}/d/d7PDkJ44k/ist_file_syst_disk_space?orgId=1&refresh=${rate}s&kiosk`;



$(".down-arrow").show();

$("#left-navigation").css({
  width: "300px",
});
$("#toggle").click(function () {
  $("#left-navigation")
    .css({
      width: "70px",
    })
    .removeClass("w-25");
  $("#left-navigation ul li a span.text").hide();
  $(".down-arrow").hide();
});
$("#show").click(function () {
  $("#left-navigation").css({
    width: "300px",
  });
  $("#left-navigation ul li a span.text").show();
  $(".down-arrow").show();
});

$(".toggle-link").click(function () {
  $(".down-arrow").toggleClass("rotate");
});

