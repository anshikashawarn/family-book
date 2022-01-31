var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://lh3.googleusercontent.com/proxy/viy7XjvLGbz3z_OaAyS5c5E6ihzsoMK-mMCr9Hza2QN3-BmwgA1NOmV50Q2wrGNjphTA8OhEP7IDBcZM_wpr3uKAVDDzyLKHHvpyGqA9BQ", "https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171207137/91230755-young-girl-kid-character-standing-cartoon-vector-illustration.jpg", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng1.12png.com%2Ft%2F5%2F21%2F13%2FyCjZ8idzip%2Fsmile-fan-cheek-art-speech-balloon.jpg&imgrefurl=https%3A%2F%2F12png.com%2Fsearch%2Fbrother-cartoon%2F9&tbnid=N4Qgu8XzjJ5fUM&vet=12ahUKEwi95Lf_vM71AhVSt2MGHc0AATcQMyguegUIARCoAg..i&docid=2VQ5erkd10WPdM&w=320&h=360&itg=1&q=brother%20cartoon%20images%20png&ved=2ahUKEwi95Lf_vM71AhVSt2MGHc0AATcQMyguegUIARCoAg","https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F171-1715148_princess-baby-girl-cartoon-hd-png-download-png.png&imgrefurl=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FiiimxhT_princess-baby-girl-cartoon-hd-png-download-png%2F&tbnid=d63Hm9lK2SuxVM&vet=12ahUKEwjwseLXvc71AhVCzqACHVgWC2YQMygOegUIARCHAg..i&docid=hJVnQhAAcTmD7M&w=860&h=989&q=baby%20sis%20cartoon&hl=en&ved=2ahUKEwjwseLXvc71AhVCzqACHVgWC2YQMygOegUIARCHAg"];
var names = ["Snehlata pandey", "Rajeev Kumar Pandey", "Anshika Shawarn", "Lakshya Shawarn","Aaradhya Shawarn"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}