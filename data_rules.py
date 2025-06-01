from data_rules import rekomendasi_tidur

print("=== Rekomendasi Waktu Tidur Ideal ===")
umur = int(input("Masukkan umur Anda: "))
print("Pilih aktivitas Anda:")
print("1. Pelajar\n2. Pekerja\n3. Atlet\n4. Santai")
aktivitas_input = input("Masukkan nomor aktivitas (1-4): ")

aktivitas_dict = {
    "1": "pelajar",
    "2": "pekerja",
    "3": "atlet",
    "4": "santai"
}

aktivitas = aktivitas_dict.get(aktivitas_input)

if aktivitas:
    durasi_tidur = rekomendasi_tidur(umur, aktivitas)
    print(f"\n>> Rekomendasi waktu tidur Anda: {durasi_tidur} jam per malam")
else:
    print("Input aktivitas tidak valid.")
