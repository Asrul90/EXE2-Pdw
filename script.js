function kirimData() {
    var name = document.getElementById("nama").value
    var nim = document.getElementById("nim").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var Alamat = document.getElementById("alamat").value
    var dropdown = document.getElementById("angkatan");
    var selectedAngkatan = dropdown.options[dropdown.selectedIndex].text;
    var tanggal = document.getElementById("tanggal").value;
    alert(
    "Nama : " + name +
    "\nNIM : " + nim +
    "\nPeminatan : " + peminatan +
    "\nAlamat : " + Alamat +
    "\nAngkatan : " + selectedAngkatan +
    "\nTanggal : " + tanggal
    )
    }