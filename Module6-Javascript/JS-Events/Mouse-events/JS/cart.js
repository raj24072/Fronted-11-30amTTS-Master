function subtotalcrt()
{
    let p=document.getElementById("Price").value;
    let q=document.getElementById("Qty").value;
    let t=p*q;
    document.getElementById("tot").innerHTML=+t;
}

function myfun()
{
    let fnm = document.getElementById("fname");
    //alert('fnm');
    fnm.value=fnm.value.toUpperCase();

    let lnm = document.getElementById("lname");
    //alert('lnm');
    lnm.value=lnm.value.toUpperCase();

    let em = document.getElementById("email");
    //alert('em');
    em.value=em.value.toUpperCase();

}