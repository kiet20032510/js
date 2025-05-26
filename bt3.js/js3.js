// Bai tap 1
let student = 
[
    [1,2,8,4],
    [4,1,2,7],
    [6,2,9,4],
    [2,5,3,1]
]
let max = 0
let subarray = [student[0], student[3]]; 
for (let i=0;i < student.length ; i++){
  if (i > max) {
    max = i
  }
}
console.log ( max)

function tongFor() {
    let tong = 0
    for (let i = 2; i <= 100; i+=2) {
        if (i % 2 ==0) 
          tong = tong + i
    }
    return tong
}
console.log("tong (for):", tongFor());
function tongWhile() {
  let tong = 0
  let i = 2
  while (i<= 100) {
     if (i % 2 == 0) 
          tong = tong + i ; 
        i++
  }
    return tong
}
console.log("tong (while):" + tongWhile());
function tongDoWhile (){
  let tong = 0
  let i =2
  do {
     if (i % 2 == 0) 
          tong = tong + i ; 
        i++ 
      }
        while ( i <=100)
  return tong        
}   
console.log ("tong (dowhile)" + tongDoWhile())       
// BAI TAP 2
function maxArray (){
  let student = [
  [1, 3, 5],
  [7, 2, 9],
  [4, 6, 0] ]
  let max = student [0][0]
  
  for ( let  i=0; i<student.length;i++) {
    for( let j=0; j<student[i].length;j++){
      if (student[i][j] > max)
        max = student[i][j]

    }
  } return max

}console.log("so lon nhat la " +maxArray())
// Bai tap 3
const allowedUsers = [
  { taikhoan: "chinhlv", matkhau: "12345678" },
  { taikhoan: "kieptt", matkhau: "12121212" },
  { taikhoan: "huypq", matkhau: "88888888" }
]

function login(taikhoan, matkhau) {
  let thongtinlogin = false

  for (let i = 0; i < allowedUsers.length; i++) {
    if (
      allowedUsers[i].taikhoan == taikhoan &&
      allowedUsers[i].matkhau == matkhau
    ) {
      thongtinlogin = true
      break
    }
  }

  if (thongtinlogin) {
    alert(" dang nhap thanh cong")
  } else {
    alert(" ten dang nhap hoac mat khau khong dung")
   
  }
}
 taikhoan = prompt("Nhập tai khoan:")
 matkhau = prompt("Nhập mat khau:")

login(taikhoan, matkhau)
// Bai tap 4
let student = [
  { name: "An", score: 7 },
  { name: "Bình", score: 9 },
  { name: "Cường", score: 4 },
  { name: "Dương", score: 6 }
]
// Bai tap 5
const arrayMoi = student
  .filter(student => student.score >= 6)
  .map(student => {
    let rank = ""
    if (student.score >= 8) {
      rank = "Giỏi"
    } else {
      rank = "Khá"
    }

    return {
      name: student.name,
      score: student.score,
      rank: rank
    }
  })

console.log(arrayMoi);

function demKyTu(str) {
  return str
    .replace(/\s/g, '') // Bỏ dấu cách
    .split('')
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
}


console.log(demKyTu("hello kiet"));
