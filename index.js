document.addEventListener('click', function () {
    var audio = document.getElementById('myAudio');
    if (audio.paused) {
        audio.play();
    }
});

document.getElementById('yesBtn').addEventListener('mouseenter', function () {
    moveButtonRandomly(this);
});

document.getElementById('yesBtn').addEventListener('click', function () {
    moveButtonRandomly(this);
});

document.getElementById('noBtn').addEventListener('click', function () {
    document.getElementById('main').innerHTML = "<br><br><br>Dù rất muốn lì xì, nhưng ép nhiều quá thì ngượng ngùng đôi bên.<br><br>Nhân dịp năm mới, Chúc AE cùng gia đình nhiều sức khỏe, gặp may mắn trong cuộc sống, và thuận lợi trong công việc. <h2>CHÚC MỪNG NĂM MỚI (☞ﾟヮﾟ)☞</h2>";
});

function moveButtonRandomly(button) {
    const newX = Math.random() * (window.innerWidth - button.clientWidth);
    const newY = Math.random() * (window.innerHeight - button.clientHeight);
    const distance = Math.sqrt(Math.pow(newX - noBtn.offsetLeft, 2) + Math.pow(newY - noBtn.offsetTop, 2));
    if (distance < 100) {
        moveButtonRandomly(button);
        return;
    }
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}