
function inSoNguyenTo() {
    var num = Number(document.getElementById("number").value);
    var count = 1;
    var result = "";
    while (count <= num) {
        // Kiểm tra có phải số nguyên tố
        if (kiemTraSNT(count)) {
            result += count + " ";
        }
        count++;
    }
    if (result == "") {
        document.getElementById("alert5").innerHTML = "Không có số nguyên tố hợp lệ";
    } else {
        document.getElementById("alert5").innerHTML = result;   
    }
}
function kiemTraSNT(num) {
    if (num < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true;
}

document.querySelector('#in').onclick = inSoNguyenTo;
