document.getElementById("persegiForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var sisi = parseFloat(document.getElementById("sisi").value);
    if (!isNaN(sisi) && sisi > 0) {
        // Menghitung keliling persegi
        var keliling = 4 * sisi;
        
        // Menghitung luas persegi
        var luas = sisi * sisi;
        
        // Menampilkan hasil keliling dan luas
        document.getElementById("hasilKeliling").textContent = "Keliling persegi dengan sisi " + sisi + " adalah " + keliling;
        document.getElementById("hasilLuas").textContent = "Luas persegi dengan sisi " + sisi + " adalah " + luas;
    } else {
        document.getElementById("hasilKeliling").textContent = "Input tidak valid. Harap masukkan angka positif.";
        document.getElementById("hasilLuas").textContent = "";
    }
});