var array =[];

function addNumber(){
    var input = Number(document.getElementById("addNumber").value);
    array.push(input);
    document.getElementById("txtAddNumber").innerHTML= "array: "+ array;
}
document.getElementById("btnAddNumber").onclick= addNumber;

//BT1

function sumPositive(){
    var sum = 0;
    for(var i =0;i<array.length;i++){
        if(array[i]> 0){
            sum+= array[i];
        }
    }
    document.getElementById("txtTotalPositive").innerHTML="Tổng số dương: " + sum;
}
document.getElementById("totalPositive").onclick=sumPositive;

//BT2
function countPositive(){
    var count = 0;
    for(var i=0 ; i < array.length ; i++){
        if(array[i]>0){
            count++;
        }
    }
    document.getElementById("txtCoutPositive").innerHTML="Đếm số dương: " +count;
}
document.getElementById("countPositive").onclick = countPositive;

//BT3
function findMin(){
    var min = array[0];
    for(var i=1;i<array.length;i++){
        if(array[i]<min){
            min = array[i];
        }
    }
    document.getElementById("txtFindMin").innerHTML="Tìm số nhỏ nhất: " + min;
}
document.getElementById("fintMin").onclick = findMin;

//BT4
function findMinOfPositive(){
    var arrayPositive = findArrayPositive();
    var min =arrayPositive[0];
    for(var i=1; i<arrayPositive.length;i++){
        if(arrayPositive[i]<min){
            min = arrayPositive[i];
        }
    }
    document.getElementById("txtFindMinOfOisitive").innerHTML="Tìm số dương nhỏ nhất: " + min;
}
document.getElementById("findMinOfPositive").onclick = findMinOfPositive;

//Hàm lọc mảng dương
function findArrayPositive (){
    var arrayPositive =[];
    for(var i=0 ; i<array.length;i++){
        if(array[i]>0){
            arrayPositive.push(array[i]);
        }
    }
    return arrayPositive;
}

//BT5

function findLast(){
    var lastNumber = "Mảng này không có số chẵn";
    
    for(var i=0; i<array.length; i++){
        if(array[i]%2==0){
            lastNumber = array[i];
        }
    }
    document.getElementById("txtFindLast").innerHTML="Tìm số chẵn cuối cùng: " + lastNumber;
}
document.getElementById("findLast").onclick = findLast;

//BT6
function swap(){
    var location1 = Number(document.getElementById("location1").value);
    var location2 = Number(document.getElementById("location2").value);
    if(location1>array.length-1 || location2>array.length-1){
        document.getElementById("txtSwap").innerHTML="Đổi chỗ: ví trị cần đổi không tồn tại"
    }else{
        var temp = array[location1];
        array[location1]=array[location2];
        array[location2]=temp;
        document.getElementById("txtSwap").innerHTML="Đổi chỗ: " + array;    
    }
}
document.getElementById("swap").onclick = swap;

//BT7

function ascSort(){
    var newArray = arraySort();
    for(var i=0; i<=newArray.length; i++){
        for(var j=0; j<=newArray.length; j++){
            if(newArray[j]>newArray[j+1]){
                var temp = newArray[j];
                newArray[j]=newArray[j+1];
                newArray[j+1]=temp;
            }
        }
    }
    document.getElementById("txtAscSort").innerHTML="Sắp xếp tăng dần: " + newArray;
}
document.getElementById("ascSort").onclick=ascSort;
//Hàm array mới
function arraySort(){
    var newArray = [];
    for(var i=0; i<array.length;i++){
        newArray.push(array[i]);
    }
    return newArray;
}
//BT8
// Hàm kiểm tra số nguyên tố
function checkPrime(primeNumber){
        if(primeNumber<2 || Number.isInteger(primeNumber)==false){
            return false;
        }else{
            for(var i=2;i<primeNumber;i++){
                if(primeNumber%i==0){
                    return false;;
                }else{
                    return true;
                }
            }
        }
  
}

function findPrime(){
    var prime = "Mảng ko có số nguyên tố"
    for(var i=0;i<array.length;i++){
        if(checkPrime(array[i])){
            prime = array[i];
            break;
        }
    }
    document.getElementById("txtFindPrime").innerHTML="Tìm số nguyên tố đầu tiên: " + prime;
}
document.getElementById("findPrime").onclick =findPrime;

//BT9

var array2 =[];
//Hàm thêm mảng của bt9
function addArray2(){
    var input = Number(document.getElementById("numberInt").value);
    array2.push(input);
    document.getElementById("txtAddNumber2").innerHTML= "array: "+ array2;
}
document.getElementById("addArray2").onclick= addArray2;

function countInt(){
    var count =0;
    for(var i=0;i<array2.length;i++){
        if(Number.isInteger(array2[i])){
            count++;
        }
    }
    document.getElementById("txtCountInt").innerHTML="Đến số nguyên: " + count;
}
document.getElementById("countInt").onclick= countInt;

//Bt10

function soSanh(){
    var countDuong=0;
    var countAm=0;
    var content = "";
    for(var i=0;i<array.length;i++){
        if(array[i]>0){
            countDuong++;
        }else if(array[i]<0){
            countAm++;
        }
    }
    if(countDuong>countAm){
        content = "số Dương > sô Âm" 
    }else if(countDuong<countAm){
        content = "số Dương < sô Âm" 
    }else{
        content = "số Dương = sô Âm" 
    }
    document.getElementById("txtDuongAm").innerHTML="So sánh số lượng số dương và số âm: " + content;
}
document.getElementById("duongAm").onclick=soSanh;