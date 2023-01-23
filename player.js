function addlistitems(inputvalue){
    const list =document.getElementById("list")
    const listnumber = list.childNodes.length
    if(listnumber === 6){
        alert("You can't add more than five")
        return
    }
    else{
        const li = document.createElement("li")
        li.innerText =inputvalue
        list.appendChild(li)        
    }
}
document.getElementById("messibtn").addEventListener('click',function(){    
    const player =document.getElementById("messi")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("messibtn").disabled = true;
    document.getElementById("messibtn").style.backgroundColor ="gray"  
})
document.getElementById("Mbappébtn").addEventListener('click',function(){    
    const player =document.getElementById("Mbappé")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("Mbappébtn").disabled = true;
    document.getElementById("Mbappébtn").style.backgroundColor ="gray"  
})
document.getElementById("neymarbtn").addEventListener('click',function(){    
    const player =document.getElementById("neymar")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("neymarbtn").disabled = true;
    document.getElementById("neymarbtn").style.backgroundColor ="gray"  
})
document.getElementById("Renatobtn").addEventListener('click',function(){    
    const player =document.getElementById("Renato")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("Renatobtn").disabled = true;
    document.getElementById("Renatobtn").style.backgroundColor ="gray"  
})
document.getElementById("Ramosbtn").addEventListener('click',function(){    
    const player =document.getElementById("Ramos")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("Ramosbtn").disabled = true;
    document.getElementById("Ramosbtn").style.backgroundColor ="gray"  
})
document.getElementById("Machadobtn").addEventListener('click',function(){    
    const player =document.getElementById("Machado")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("Machadobtn").disabled = true;
    document.getElementById("Machadobtn").style.backgroundColor ="gray"  
})
document.getElementById("dinhobtn").addEventListener('click',function(){    
    const player =document.getElementById("dinho")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("dinhobtn").disabled = true;
    document.getElementById("dinhobtn").style.backgroundColor ="gray"  
})
document.getElementById("cr7btn").addEventListener('click',function(){    
    const player =document.getElementById("cr7")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("cr7btn").disabled = true;
    document.getElementById("cr7btn").style.backgroundColor ="gray"  
})
document.getElementById("marcelobtn").addEventListener('click',function(){    
    const player =document.getElementById("marcelo")
    const playername =player.innerText
    addlistitems(playername)
    document.getElementById("marcelobtn").disabled = true;
    document.getElementById("marcelobtn").style.backgroundColor ="gray"  
})

document.getElementById("calculate").addEventListener("click",function(){

    const playerprice =document.getElementById("playerprice").value
    const totalplayerprice = parseInt(playerprice)*5

    const playerbudgetfleid =document.getElementById("playertotal")
    if ( isNaN(totalplayerprice)){
        playerbudgetfleid.innerText =00
    }
    else{
        playerbudgetfleid.innerText =totalplayerprice
    }
    document.getElementById("playerprice").value =''
})

document.getElementById("totalcalculate").addEventListener("click",function(){

    const playerbudgetfleid =document.getElementById("playertotal")
    const totalplayerprice =parseInt(playerbudgetfleid.innerText)
    const managercost = document.getElementById("managerprice").value
    const coachcost = document.getElementById("coachprice").value
    const overalltotal =totalplayerprice + parseInt(managercost) +parseInt(coachcost)

    const full =document.getElementById("overalltotal")
    full.innerText = overalltotal
    if ( isNaN(overalltotal)){
        full.innerText =00
    }
    else{
        full.innerText = overalltotal
    }
    document.getElementById("managerprice").value =''
    document.getElementById("coachprice").value =''

})
