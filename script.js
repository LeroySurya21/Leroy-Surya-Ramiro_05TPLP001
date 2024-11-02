function showMenu(menu) {
    // Menyembunyikan semua elemen dengan kelas 'menu'
    document.querySelectorAll('.menu').forEach(function(el) {
        el.style.display = 'none';
    });

    // Menampilkan elemen dengan ID yang sesuai dengan menu yang dipilih
    var selectedMenu = document.getElementById(menu);
    if (selectedMenu) {
        selectedMenu.style.display = 'block';
    } else {
        console.error("Menu dengan ID '" + menu + "' tidak ditemukan.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Menampilkan menu dashboard sebagai menu default saat pertama kali halaman dimuat
    showMenu('dashboard');
});
