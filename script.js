function signup() {
    const nickname = document.getElementById("signupNickname").value;
    const password = document.getElementById("signupPassword").value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some(user => user.nickname === nickname)) {
        alert("이미 존재하는 닉네임입니다.");
        return;
    }

    users.push({ nickname, password, characters: [] });
    localStorage.setItem("users", JSON.stringify(users));
    alert("회원가입 완료! 로그인해주세요.");
    location.href = "login.html";
}

function login() {
    const nickname = document.getElementById("loginNickname").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.nickname === nickname && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("로그인 성공!");
        location.href = "index.html";
    } else {
        alert("닉네임 또는 비밀번호가 올바르지 않습니다.");
    }
}