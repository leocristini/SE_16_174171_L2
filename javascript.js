function showForm(){
    
    var form = document.getElementById("add_form");
    if(form.style.display=="block"){
        form.style.display = "none";
        form.reset();
    }else
        form.style.display="block";

};

function setOrder(){
    //prendo il valore della massima capienza
    var maxAmount = document.getElementById("maxAmount").value;
    namelist = document.getElementById("main_table").rows[0].cells;
    qtàlist = document.getElementById("main_table").rows[1].cells;
    var count = 0;
    for(var i=0; i < namelist.length; i++){
        //se mi sto riferendo ad un oggetto gia presente
        if(namelist[i].innerHTML == document.getElementById("it_name").value){
            var numqtà = parseInt(qtàlist[i].innerHTML,10);
            //aggiorno la sua quantità
            numqtà += +document.getElementById("it_qty").value;
            qtàlist[i].innerHTML = numqtà;
            count++;
            if(numqtà > maxAmount){
                //se supero il massimo da errore
                alert("too many items ordered");
                qtàlist[i].innerHTML = maxAmount;
            }
        }
    }
    //se l'elemento non è presente nella lista
    if(count == 0){
        var tmp_it = document.getElementById("it_list").insertCell(0);
        tmp_it.innerHTML = document.getElementById("it_name").value;
        var tmp_qty = document.getElementById("qty_list").insertCell(0);
        //se la quantità inserita non è maggiore alla quantità massima
        if(Number(document.getElementById("it_qty").value)>maxAmount){
            tmp_qty.innerHTML = maxAmount;  
             alert("too many items ordered");
        }else
            tmp_qty.innerHTML = document.getElementById("it_qty").value; 
    }
    
    
    showForm();
    
};

function changeMaxAm(){
    
    if(document.getElementById("maxAmount").readOnly == true)
        document.getElementById("maxAmount").readOnly = false;
    else
        document.getElementById("maxAmount").readOnly = true;
    
    
};