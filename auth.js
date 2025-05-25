
function register() {
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;
    if (!nickname || !password) {
        alert('닉네임과 비밀번호를 입력하세요.');
        return;
    }
    localStorage.setItem('user_' + nickname, JSON.stringify({ password }));
    alert('회원가입 완료! 로그인 해주세요.');
    location.href = 'login.html';
}

function login() {
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;
    const saved = localStorage.getItem('user_' + nickname);
    if (!saved) {
        alert('사용자를 찾을 수 없습니다.');
        return;
    }
    const user = JSON.parse(saved);
    if (user.password !== password) {
        alert('비밀번호가 틀렸습니다.');
        return;
    }
    localStorage.setItem('currentUser', nickname);
    alert('로그인 성공!');
    location.href = 'simulator.html';
}
