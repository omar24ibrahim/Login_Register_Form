function isValid()
{
    e = document.getElementById("email");
    p = document.getElementById("password");
    if(e.value=="" || e.value=="Please fill this field" || p.value=="" || p.value=="Please fill this field")
    {
        if(e.value=="" || e.value=="Please fill this field")
        {
            e.style.borderColor = "red";
            e.value = "Please fill this field";
        }
        else
        {
            e.style.borderColor = "black";
        }
        if(p.value=="" || p.value=="Please fill this field")
        {
            p.style.borderColor = "red";
            p.value = "Please fill this field";
            p.type = "text";
        }
        else
        {
            p.style.borderColor = "black";
        }
    }
    else
    {
        document.getElementById("login_form").submit();
    }
}

function showPassword()
{
    p = document.getElementById("password");
    let x = p.type;
    if(x === "password")
    {
        p.type = "text";
    }
    else
    {
        p.type = "password";
    }
}

function resetPassword()
{
    p = document.getElementById("password");
    if(p.style.borderColor == "red")
    {
        p.value = "";
        p.style.borderColor = "black";
        p.type = "password";
    }
}

function resetEmail()
{
    e = document.getElementById("email");
    if(e.style.borderColor == "red")
    {
        e.value = "";
        e.style.borderColor = "black";
    }
}

function x()
{
    e = document.getElementById("email");
    e.value = "abcdefg";
}