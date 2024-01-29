function isValid()
{
    e = document.getElementById("email");
    n = document.getElementById("name");
    p = document.getElementById("password1");
    cp = document.getElementById("password2");
    if(cp.value==p.value || p.value=="" || cp.value=="")
    {
        if(e.value=="" || e.value=="Please fill this field" || n.value=="" || n.value=="Please fill this field" || p.value=="" || p.value=="Please fill this field" || cp.value=="" || cp.value=="Please fill this field")
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
            if(n.value=="" || n.value=="Please fill this field")
            {
                n.style.borderColor = "red";
                n.value = "Please fill this field";
            }
            else
            {
                n.style.borderColor = "black";
            }
            if(p.value=="" || p.value=="Please fill this field")
            {
                p.style.borderColor = "red";
                p.type = "text";
                p.value = "Please fill this field";
            }
            else
            {
                p.style.borderColor = "black";
            }
            if(cp.value=="" || cp.value=="Please fill this field")
            {
                cp.style.borderColor = "red";
                cp.type = "text";
                cp.value = "Please fill this field";
            }
            else
            {
                cp.style.borderColor = "black";
            }
        }
        else
        {
            document.getElementById("reg_form").submit();
        }
    }
    else
    {
        if(cp.value=="Please fill this field")
        {
            cp.style.borderColor = "red";
            cp.type = "text";
            cp.value = "Please fill this field";
        }
        else
        {
            p.style.borderColor = "red";
            cp.style.borderColor = "red";
            cp.type = "text";
            cp.value = "This field doesn't match the previous one.";
        }
    }
}

function showPassword(i)
{
    p = document.getElementById("password" + i);
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

function resetPassword(x)
{
    p = document.getElementById("password" + x);
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

function resetName()
{
    n = document.getElementById("name");
    if(n.style.borderColor == "red")
    {
        n.value = "";
        n.style.borderColor = "black";
    }
}