$("#btn").click(function () {
   $("#show_hide").slideToggle(2000);
});

$("#char_search").keyup(function () {
   let karakterSzam = $(this).val().length;
   $("#result").text(karakterSzam + " karakter beírva");
});

$("#btn-2").click(function () {
   $("#inp").attr("type") === "text"
      ? $("#inp").attr("type", "password")
      : $("#inp").attr("type", "text");
});

$("#num-inp").keyup(function () {
   $(this).val() < 0
      ? $("#img").attr("src", "ice.jpg")
      : $(this).val() >= 100
      ? $("#img").attr("src", "steam.jpg")
      : $("#img").attr("src", "water.jpg");
});
