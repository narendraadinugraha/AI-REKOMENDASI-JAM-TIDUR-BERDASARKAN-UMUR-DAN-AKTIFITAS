function hitungJamBangun(jamTidur, durasiTidur) {
    // jamTidur format "HH:MM"
    const [jam, menit] = jamTidur.split(':').map(Number);
    let totalMenitTidur = durasiTidur * 60;
  
    let jamBangun = jam * 60 + menit + totalMenitTidur;
    jamBangun = jamBangun % (24 * 60); // mod 24 jam
  
    let jamBangunJam = Math.floor(jamBangun / 60);
    let jamBangunMenit = jamBangun % 60;
  
    // Format jam bangun jadi "HH:MM"
    return `${jamBangunJam.toString().padStart(2, '0')}:${jamBangunMenit.toString().padStart(2, '0')}`;
  }
  
  function rekomendasiTips(umur, aktivitas) {
    let tips = [];
  
    if (umur < 18) {
      tips.push("Pastikan tidur minimal 8-10 jam untuk pertumbuhan optimal.");
    } else {
      tips.push("Usahakan tidur 7-9 jam untuk menjaga kesehatan tubuh dan otak.");
    }
  
    if (aktivitas === "atlet") {
      tips.push("Karena aktivitas fisik tinggi, tidur cukup sangat penting untuk pemulihan otot.");
    } else if (aktivitas === "pekerja") {
      tips.push("Kurangi penggunaan gadget sebelum tidur untuk kualitas tidur lebih baik.");
    } else if (aktivitas === "pelajar") {
      tips.push("Jangan tidur terlalu larut agar otak lebih segar saat belajar.");
    } else if (aktivitas === "santai") {
      tips.push("Jaga konsistensi jam tidur agar ritme sirkadian tetap terjaga.");
    }
  
    tips.push("Hindari konsumsi kafein dan makanan berat sebelum tidur.");
  
    return tips;
  }
  
  document.getElementById('sleepForm').addEventListener('submit', function(e){
    e.preventDefault();
  
    const umur = parseInt(document.getElementById('umur').value);
    const aktivitas = document.getElementById('aktivitas').value;
    const jamTidur = document.getElementById('jamTidur').value;
  
    // Validasi input umur
    if (umur < 1 || umur > 120 || isNaN(umur)) {
      alert("Masukkan umur yang valid antara 1 sampai 120.");
      return;
    }
  
    if (!aktivitas) {
      alert("Pilih aktivitas Anda.");
      return;
    }
  
    if (!jamTidur) {
      alert("Masukkan jam tidur yang diinginkan.");
      return;
    }
  
    // Hitung durasi tidur berdasarkan logika sebelumnya
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
  
    const jamBangun = hitungJamBangun(jamTidur, durasi);
  
    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
      Rekomendasi waktu tidur Anda: <strong>${durasi} jam per malam</strong><br />
      Jika Anda tidur pukul <strong>${jamTidur}</strong>, maka waktu bangun yang disarankan adalah pukul <strong>${jamBangun}</strong>.
    `;
  
    // Tampilkan tips
    const tips = rekomendasiTips(umur, aktivitas);
    document.getElementById('tips').innerHTML = "<strong>Tips tidur berkualitas:</strong><ul>" +
      tips.map(t => `<li>${t}</li>`).join("") +
      "</ul>";
  });
  