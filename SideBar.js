
let toggle = false

let toggleTwo = false

function Switch() {
    toggle = !toggle
    toggle ? 
    document.getElementById('sidebar').style.display= 'flex' 
    : 
    document.getElementById('sidebar').style.display= 'none'
    document.getElementById("submenu").style.display = 'none'
    console.log(toggle)    
}

function checkout(param) {

    if (param=='checkout') {
        Switch()
        submenu('close')
    }

    toggleTwo = !toggleTwo
    toggleTwo ? 
    document.getElementById('checkout-process').style.display= 'flex' 
    : 
    document.getElementById('checkout-process').style.display= 'none'
    console.log(toggleTwo)    
}

function submenu(params) {
    console.log(params)

    params === 'close' ?  document.getElementById("submenu").style.display = 'none' : null

    if (params=='custom') {
        document.getElementById("submenu").style.display = 'flex'
        document.getElementById("submenu").style.top = '11vh'
        document.getElementById("submenu").style.bottom = '50%'
        
    }
    else if(params=='popular') {
        document.getElementById("submenu").style.display = 'flex'
        document.getElementById("submenu").style.top = '21vh'
        document.getElementById("submenu").style.bottom = '40%'

        document.getElementById("subtitle").innerHTML = "Better Together"
        document.getElementById("subtitle1").innerHTML = "Blessed"
        document.getElementById("subtitle2").innerHTML = "Family"
        document.getElementById("subtitle3").innerHTML = "Live Laugh Life"
        document.getElementById("subtitle4").innerHTML = "Love"
        
    }
    else if(params=='holidays') {
        document.getElementById("submenu").style.display = 'flex'
        document.getElementById("submenu").style.top = '31vh'
        document.getElementById("submenu").style.bottom = '30%'

        document.getElementById("subtitle").innerHTML = "Merry Christmas"
        document.getElementById("subtitle1").innerHTML = "Happy Anniversary"
        document.getElementById("subtitle2").innerHTML = "Happy Birthday"
        document.getElementById("subtitle3").innerHTML = "Happy Valentine's Day"
        document.getElementById("subtitle4").innerHTML = "Happy Easter"
    }
    else if(params=='decor') {
        document.getElementById("submenu").style.display = 'flex'
        document.getElementById("submenu").style.top = '41vh'
        document.getElementById("submenu").style.bottom = '20%'

        document.getElementById("subtitle").innerHTML = "Miss You Everyday"
        document.getElementById("subtitle1").innerHTML = "Love You Forever"
        document.getElementById("subtitle2").innerHTML = "Our Family"
        document.getElementById("subtitle3").innerHTML = "Happily Ever After"
        document.getElementById("subtitle4").innerHTML = "Forever In Our Hearts"
    }
    else if(params=='awards') {
        document.getElementById("submenu").style.display = 'flex'
        document.getElementById("submenu").style.top = '51vh'
        document.getElementById("submenu").style.bottom = '10%'

        document.getElementById("subtitle").innerHTML = "With Highest Honors"
        document.getElementById("subtitle1").innerHTML = "Graduate"
        document.getElementById("subtitle2").innerHTML = "Newly Weds"
        document.getElementById("subtitle3").innerHTML = "Engaged"
        document.getElementById("subtitle4").innerHTML = "Just Married"
    }

}