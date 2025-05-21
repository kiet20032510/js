let kwhdien = parseFloat(prompt("nhap so kwh dien da dung trong thang"));
if (kwhdien <= 0) {
  alert("ban da nhap sai so kwd dien");
} else {
  if (0 <= kwhdien <= 50) {
    giatien = 1.678;
    a = "it";
  }
  if (50 < kwhdien <= 100) {
    giatien = 1.678;
    a = "binh thuong";
  }
  if (100 < kwhdien <= 200) {
    giatien = 1.678;
    a = "nhieu";
  }
  if (kwhdien > 201) {
    giatien = 1.678;
    a = "qua nhieu";
  }
  let tiendien = kwhdien * giatien;

  alert("so tien dien " + tiendien + "muc su dung dien: " + a);
}
