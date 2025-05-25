function getStatValues() {
    return {
        str: parseInt(document.getElementById("str").value) || 0,
        dex: parseInt(document.getElementById("dex").value) || 0,
        vit: parseInt(document.getElementById("vit").value) || 0,
        acc: parseInt(document.getElementById("acc").value) || 0,
        pen: parseInt(document.getElementById("pen").value) || 0,
    };
}

function getTotalUsedPoints(stats) {
    return stats.str + stats.dex + stats.vit + stats.acc + stats.pen;
}

function updateAvailablePoints() {
    const level = parseInt(document.getElementById("levelInput").value) || 1;
    const maxPoints = level * 3;
    const stats = getStatValues();
    const usedPoints = getTotalUsedPoints(stats);
    const available = Math.max(0, maxPoints - usedPoints);
    document.getElementById("availablePoints").innerText = available;
}

function enforceStatLimits(e) {
    const level = parseInt(document.getElementById("levelInput").value) || 1;
    const maxPoints = level * 3;

    const statLimits = {
        str: 200,
        dex: 200,
        acc: 50,
        pen: 50
    };

    const stats = getStatValues();
    const total = getTotalUsedPoints(stats);
    const input = e.target;
    const stat = input.id;

    // 제한된 스탯 범위 넘지 않도록
    if (statLimits[stat] !== undefined && stats[stat] > statLimits[stat]) {
        input.value = statLimits[stat];
    }

    // 전체 포인트 초과 시 현재 입력값 줄이기
    if (total > maxPoints) {
        const over = total - maxPoints;
        input.value = Math.max(0, stats[stat] - over);
    }

    updateAvailablePoints();
}

function calculateStats() {
    const stats = getStatValues();

    const atk = (stats.str * 1.1 + stats.dex * 1.3 + stats.vit * 0.8 + stats.acc * 1 + stats.pen * 0.7).toFixed(1);
    const hp = (stats.str * 2 + stats.vit * 2.75).toFixed(1);
    const spd = (stats.dex * 0.25).toFixed(2);
    const def = (stats.vit * 0.1).toFixed(1);
    const critRate = (stats.acc * 0.15).toFixed(2);
    const critDmg = ((stats.acc + stats.pen) * 0.5).toFixed(2);
    const bossDmg = (stats.pen * 0.7).toFixed(1);

    document.getElementById("result").innerHTML = `
        <h3>능력치 결과</h3>
        <p>공격력: ${atk}</p>
        <p>체력: ${hp}</p>
        <p>이동속도: ${spd}</p>
        <p>방어력: ${def}</p>
        <p>치명타 확률: ${critRate}%</p>
        <p>치명타 피해량: ${critDmg}%</p>
        <p>보스 공격력: ${bossDmg}</p>
    `;
}

// 이벤트 연결
document.querySelectorAll("#str, #dex, #vit, #acc, #pen, #levelInput").forEach(el => {
    el.addEventListener("input", enforceStatLimits);
});

// 초기화
updateAvailablePoints();
