let number = Math.floor(+prompt('لطفا عدد مورد نظر وارد کنید'));
let result = 0;
if (isNaN(number)){
    alert("لطفا عدد وارد کنید")
} else if(number < 0) {
    alert("عدد نباید منفی باشد");;
} else if (number == 0 || number == 1) {
    result = 1;
    alert(`فاکتور یل عدد ${number} می شود ${result}`);
} else {
    let i = number - 1;
    result = number;
    for (i; i >= 1; i--) {
        result *=  i;

    }
    alert(`فاکتور یل عدد ${number} می شود ${result}`);
}










