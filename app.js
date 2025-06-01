document.getElementById('sleepForm').addEventListener('submit', function(e){
    e.preventDefault();
  
    const umur = parseInt(document.getElementById('umur').value);
    const aktivitas = document.getElementById('aktivitas').value;
  
    let durasi;
    switch (aktivitas) {
      case 'pelajar':
        if (umur <= 12) durasi = 10;
        else if (umur <= 18) durasi = 9;
        else durasi = 8;
        break;
      case 'pekerja':
        durasi = (umur < 40) ? 7.5 : 7;
        break;
      case 'atlet':
        durasi = 9;
        break;
      case 'santai':
        durasi = 8;
        break;
      default:
        durasi = 7;
    }
  
    document.getElementById('result').textContent = `Rekomendasi waktu tidur Anda: ${durasi} jam per malam`;
  });
  