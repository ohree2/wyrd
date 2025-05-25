
function calculateStats() {
    const level = parseInt(document.getElementById('levelInput').value);
    const str = parseInt(document.getElementById('str').value);
    const dex = parseInt(document.getElementById('dex').value);
    const vit = parseInt(document.getElementById('vit').value);
    const acc = parseInt(document.getElementById('acc').value);
    const pen = parseInt(document.getElementById('pen').value);
    const result = document.getElementById('result');
    result.innerHTML = `
        <h3>결과</h3>
        <p>근력: ${str}, 민첩: ${dex}, 맷집: ${vit}, 명중: ${acc}, 관통: ${pen}</p>
        <p>총 스탯: ${str + dex + vit + acc + pen}</p>
        <p>레벨: ${level}</p>
    `;
}
