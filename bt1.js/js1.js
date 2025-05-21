let toan = parseFloat(prompt("nhap diem mon toan"));
let ly = parseFloat(prompt("nhap diem mon ly"));
let hoa = parseFloat(prompt("nhap diem mon hoa"));
if (toan <= 0 || ly <= 0 || hoa <= 0 || toan >= 10 || ly >= 10 || hoa >= 10) {
  alert("vui long nhap diem tu 1 den 10");
} else {
  if (toan < 4 || ly < 4 || hoa < 4) {
    alert("Ban da rot");
  } else {
    let tb = (toan + ly + hoa) / 3;
    
    if (tb >= 8) {
      hocluc = "gioi";
    }
    if (tb >= 6.5 && tb < 8) {
      hocluc = "kha";

    }

    if (tb >= 5 && tb < 6.5) {
      hocluc = "trungbinh";
    }
    if (tb < 5) {
      hocluc = "yeu";
    }
    
    
    alert("diem trung binh: " + tb + " hoc luc: " + hocluc);
  }
}
