
function checkuser() {
    var user = document.getElementById("user").value;
    var reg = /^\w{4,12}$/;
    if (!reg.test(user)) {
        document.getElementById("userId").innerHTML = "由字母、数字和下划线组成的4-16位字符";
        return false;
    }
    document.getElementById("userId").innerHTML = "输入成功";
    return true;
}
function checkPwd() {
    var pwd = document.getElementById("pwd").value;
    var reg = /^[a-zA-Z0-9]{4,12}$/;
    var reg1 = /^\d{4,12}$/;
    if (!reg.test(pwd)) {
        document.getElementById("pwdId").innerHTML = "密码长度为6-12个字符";
        return false;
    }
    if (reg1.test(pwd)) {
        document.getElementById("pwdId").innerHTML = "密码设置太简单";
        return false;
    }
    document.getElementById("pwdId").innerHTML = "输入成功";
    return true;
}
function checkRepwd() {
    var repwd = document.getElementById("repwd").value;
    var pwd = document.getElementById("pwd").value;
    if (pwd != repwd) {
        document.getElementById("repwdId").innerHTML = "两次输入的密码不一致";
        return false;
    }
    document.getElementById("repwdId").innerHTML = "输入成功";
    return true;
}
function checkEmail() {
    var email = document.getElementById("email").value;
    var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
    if (!reg.test(email)) {
        document.getElementById("emailId").innerHTML = "邮箱格式不正确";
        return false;
    }
    document.getElementById("emailId").innerHTML = "输入成功";
    return true;
}
function check() {
    if (!checkuser() || !checkPwd() || !checkRepwd() || !checkEmail()) {
        alert("请将信息填写完整!");
        return false;
    }
    return true;
}