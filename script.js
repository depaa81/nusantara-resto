// Basic interactions: header scroll, reservation form simulation
document.addEventListener('DOMContentLoaded', function(){
  const header = document.querySelector('header');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 40) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  });

  const reserveForm = document.getElementById('reserveForm');
  const reserveMsg = document.getElementById('reserveMsg');

  if(reserveForm){
    reserveForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(reserveForm);
      // Simulate submission; replace with real endpoint if available
      reserveMsg.textContent = 'Terima kasih — permintaan reservasi Anda telah dikirim. Kami akan menghubungi Anda untuk konfirmasi.';
      reserveForm.reset();
      setTimeout(()=> reserveMsg.textContent = '', 8000);
      console.log('Reservasi:', Object.fromEntries(data.entries()));
    });
  }
});
