window.onload = function () { //esperando o carregamento da pagina. então execute
    field = document.getElementById("field");
    boxField = field.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 15);
}
fieldInX = FieldInY = 10;
blockSize = 20;
pixelX = PixelY = 15;
positionX = positionY = 0;
trail = [];
tail = 5;
function game() {
    fieldInX += positionX;
    FieldInY += positionY;
    if (fieldInX < 0) {
        fieldInX = blockSize - 1;
    }
    if (fieldInX > blockSize - 1) {
        fieldInX = 0;
    }
    if (FieldInY < 0) {
        FieldInY = blockSize - 1;
    }
    if (FieldInY > blockSize - 1) {
        FieldInY = 0;
    }
    boxField.fillStyle = "black";
    boxField.fillRect(0, 0, field.width, field.height);

    boxField.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        boxField.fillRect(trail[i].x * blockSize, trail[i].y * blockSize, blockSize - 2, blockSize - 2);
        if (trail[i].x == fieldInX && trail[i].y == FieldInY) {
            tail = 5;
        }
    }
    trail.push({ x: fieldInX, y: FieldInY });
    while (trail.length > tail) {
        trail.shift();
    }
    if (pixelX == fieldInX && PixelY == FieldInY) {
        tail++;
        pixelX = Math.floor(Math.random() * blockSize);
        PixelY = Math.floor(Math.random() * blockSize);
    }
    boxField.fillStyle = "red";
    boxField.fillRect(pixelX * blockSize, PixelY * blockSize, blockSize - 2, blockSize - 2);
}
function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            positionX = -1; positionY = 0;
            break;
        case 38:
            positionX = 0; positionY = -1;
            break;
        case 39:
            positionX = 1; positionY = 0;
            break;
        case 40:
            positionX = 0; positionY = 1;
            break;
    }
}