function val()
{
    if(document.frm.fname.value=="")
    {
        alert('please enter FirstName*')
        document.frm.fname.focus();
        return false;
    }
    if(document.frm.lname.value=="")
    {
        alert('Please enter LastName*')
        document.frm.lname.focus();
        return false;
    }
    if(document.frm.email.value=="")
    {
        alert('Please enter Email*')
        document.frm.email.focus();
        return false;
    }
}