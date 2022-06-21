//----------Bài 1----------\\
document.getElementById('btnTimSoNguyen').onclick = function(){
    //input: tong=0; timNguyenDuong=0
    //output: Số nguyên dương nhỏ nhất < 10,000: number
    //Xử lý:
        //B1: X/đ yếu tố thay đổi
    var tong = 0;
    var timNguyenDuong = 0;
        //B2: Điều kiện lặp
    while (tong < 10000){
        //B3: Khối lệnh thực thi
    timNguyenDuong++;
    tong += timNguyenDuong;
        //B4: Thay đổi điều kiện lặp
    }
    //In ra giao diện
    document.getElementById('ketQua1').innerHTML = '👉' + 'Số nguyên dương nhỏ nhất: ' + timNguyenDuong;
}

//----------Bài 2----------\\
document.getElementById('btnTinhTongN').onclick = function(e){
    e.preventDefault();
    SUM('nhapSoX','nhapSoN');
}

function SUM(id1, id2){
    //input: X: number, N: number
    var x = Number(document.getElementById(id1).value);
    var n = Number(document.getElementById(id2).value);
    //output: Sum: number
    //Xử lý:
        //B1: X/đ yếu tố thay đổi
        var Sum = 0;
        var soN = 1;
            //B2: Điều kiện lặp
        while (soN <= n){
            //B3: Khối lệnh thực thi
        Sum += x *soN;
            //B4: Thay đổi điều kiện lặp
        soN++;
        }
        //In ra giao diện
        document.getElementById('ketQua2').innerHTML = '👉' + 'Tổng: ' + Sum;
}

//----------Bài 3----------\\
document.getElementById('btnTinhGiaiThua').onclick = function(e){
    e.preventDefault();
    //input: So: number
    var n = Number(document.getElementById('nhapsoN').value);
    //output: giaiThua: number
    var giaiThua = 1;
    //Xử lý:
        //B1: X/đ yếu tố thay đổi
        var soN = 1;
            //B2: Điều kiện lặp
        while (soN <= n){
            //B3: Khối lệnh thực thi
        giaiThua *= soN;
            //B4: Thay đổi điều kiện lặp
        soN++;
        }
        //In ra giao diện
        document.getElementById('ketQua3').innerHTML = '👉' + 'Giai thừa: ' + giaiThua;
}

//----------Bài 4----------\\
document.getElementById('btnTaoThe').onclick = function(e){
    e.preventDefault();
    var divC = "<div style=background-color:red;color:white;padding:10px 0;>Div chẵn</div>";
    var divL = "<div style=background-color:blue;color:white;padding:10px 0; text-align: center;>Div lẻ</div>";
    //input: 
    //output: 10 thẻ div
    var result = "";
    //Xử lý:
        //B1: X/đ yếu tố thay đổi
        var dem = 1;
        //B2: Điều kiện lặp
        while (dem <= 10){
        //B3: Khối lệnh thực thi
          if(dem % 2 === 0){
            result += divC;         
          } else {
            result += divL;
          }
        //B4: Thay đổi điều kiện lặp
        dem++;
        }
        //In ra giao diện
        document.getElementById('ketQua4').innerHTML = '👉' + result;
}