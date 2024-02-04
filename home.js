var a = 1
var b = 1
var c = 1

function colour() {
    if (a % 2 != 0) {
        document.getElementById("a11").style.backgroundColor = "green"
        document.getElementById("t1").style.textDecoration="line-through"
        a++
    }
    else {
        document.getElementById("a11").style.backgroundColor = "#bbb"
        document.getElementById("t1").style.textDecoration="none"
        a++
    }

}

function colour1() {
    if (b % 2 != 0) {
        document.getElementById("a12").style.backgroundColor = "green"
        document.getElementById("t2").style.textDecoration="line-through"
        b++
    }
    else {
        document.getElementById("a12").style.backgroundColor = "#bbb"
        document.getElementById("t2").style.textDecoration="none"
        b++
    }
}

function colour2() 
{
    if (c % 2 != 0) 
    {
        document.getElementById("a13").style.backgroundColor = "green"
        document.getElementById("t3").style.textDecoration="line-through"
        c++
    }
    else 
    {
        document.getElementById("a13").style.backgroundColor = "#bbb"
        document.getElementById("t3").style.textDecoration="none"
        c++
    }
}

function search()
{
    
}


