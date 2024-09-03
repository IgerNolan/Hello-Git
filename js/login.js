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
    if (!reg.test(pwd) || reg1.test(pwd)) {
        document.getElementById("pwdId").innerHTML = "密码错误";
        return false;
    }
    document.getElementById("pwdId").innerHTML = "密码正确";
    return true;
}
function check() {
    if (!checkuser() || !checkPwd()) {
        alert("请将信息填写完整!");
        return false;
    }
    return true;
}