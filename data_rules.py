def rekomendasi_tidur(umur, aktivitas):
    if aktivitas == "pelajar":
        if umur <= 12:
            return 10
        elif umur <= 18:
            return 9
        else:
            return 8
    elif aktivitas == "pekerja":
        if umur < 40:
            return 7.5
        else:
            return 7
    elif aktivitas == "atlet":
        return 9
    elif aktivitas == "santai":
        return 8
    else:
        return 7  # Default
