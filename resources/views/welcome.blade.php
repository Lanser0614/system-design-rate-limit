<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canvas Editor with Download</title>
    <link rel="stylesheet" href={{ asset("css/styles.css") }}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
</head>
<body>
<div id="canvasContainer" class="parent">
    <div class="canvas" id="canvas">
        <canvas id="printCanvas"></canvas>
    </div>
    <div id="controls" class="button-group">
        <div class="upper-container">
            <div class="tshirt-image-container">
                <img class="tshirt-image" src={{ asset("image/white-tshirt.png") }} alt="tshirt-white">
                <img class="tshirt-image" src={{ asset("image/black-tshirt.png") }} alt="tshirt-black">
            </div>
            <div class="dropzone" id="dropzone">
                <span
                    style="color: #008bf5; white-space: pre-wrap; width: 50%;"
                >Перетащите ваш файл сюда или выберите его
                </span>
                <i class="fas fa-file-download fa-lg" style="color: #008bf5;"></i>
                <input type="file" id="imageUpload"/>
            </div>
        </div>
        <div class="editor">
            <div>
                <label for="textInput" style="width: 100%; text-align: left">
                    <span>Добавить текст</span>
                    <input type="text" id="textInput" placeholder="Добавьте текст" oninput="editText(this.value)"/>
                    <button onclick="addText()">Добавить текст</button>
                </label>
            </div>
            <div>
                <label for="font-family">Стиль шрифта:
                    <select id="font-family" onchange="changeFontFamily(this.value)">
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                    </select>
                </label>
            </div>
            <div>
                <label for="font-size">Размер шрифта:
                    <input type="number" id="font-size" value="30" onchange="changeFontSize(this.value)" min="10"
                           max="100">
                </label>
            </div>
            <div>
                <label for="text-color">Цвет текста:
                    <input type="color" id="text-color" value="#000000" onchange="changeTextColor(this.value)">
                </label>
            </div>
            <div style="display: flex; justify-content: space-between">
                <label for="text-bold">Жирный:
                    <input type="checkbox" id="text-bold" onchange="toggleBold(this.checked)">
                </label>
                <label for="text-italic">Курсив:
                    <input type="checkbox" id="text-italic" onchange="toggleItalic(this.checked)">
                </label>
            </div>
        </div>
        <button id="deleteButton" class="box-shadow-main">Удалить выбранный элемент</button>
        <button id="downloadButton" class="box-shadow-main"><i class="fas fa-upload"></i> Скачать</button>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.0/fabric.min.js"></script>
<script src={{ asset("script/index.js") }}></script>
</body>
</html>
