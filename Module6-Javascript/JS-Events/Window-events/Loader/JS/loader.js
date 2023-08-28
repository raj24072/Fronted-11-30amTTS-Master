var myvar;
function mainfunction() 

{
    myvar = setTimeout("test()", 2000);
}

function test() 

{
    document.getElementById("mainfunction").style = "display:block";
    document.getElementById("loader").style = "display:none";
}