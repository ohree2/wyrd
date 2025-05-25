
const jobStats = {
    "나이트": "공격력 +10, 방어력 +20",
    "레인저": "공격속도 +15%, 치명타 확률 +5%",
    "어쌔신": "치명타 데미지 +25%, 회피율 +10%",
    "메지션": "마법 공격력 +30, 마나 재생 +10%",
    "팔라딘": "체력 +50, 방어력 +15",
    "프리스트": "힐량 +20%, 마나 +30"
};

const select = document.getElementById("jobSelect");
const statInfo = document.getElementById("statInfo");

select.addEventListener("change", function() {
    const selected = select.value;
    statInfo.innerText = jobStats[selected] || "";
});
