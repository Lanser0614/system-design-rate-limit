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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
</head>
<body>
<nav class="navbar animated-box">
    <div class="logo-container">
        <img src="{{ asset('image/logo.jpg') }}" alt="Logo" class="logo">
    </div>
{{--    <ul class="nav-links">--}}
{{--        <li><a href="#">Home</a></li>--}}
{{--        <li><a href="#">About</a></li>--}}
{{--        <li><a href="#">Services</a></li>--}}
{{--        <li><a href="#">Contact</a></li>--}}
{{--    </ul>--}}
</nav>
<div id="canvasContainer" class="parent container">
    <div class="canvas" id="canvas">
        <canvas id="printCanvas"></canvas>
    </div>
    <div id="controls" class="button-group">
        <div class="upper-container">
            <img class="tshirt-image" src={{ asset("image/white-tshirt.png") }} alt="tshirt-white" style="grid-column: span 3 / span 3">
            <img class="tshirt-image" src={{ asset("image/black-tshirt.png") }} alt="tshirt-black" style="grid-column: span 3 / span 3">
            <div class="dropzone" id="dropzone" style="grid-column: span 6 / span 6">
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
                    <div class="title">Добавить текст</div>
                    <input type="text" id="textInput" name="text" placeholder="Добавьте текст" oninput="editText(this.value)"/>
                    <button id="addText">Добавить текст</button>
                </label>
            </div>
            <div>
                <label for="font-family">Стиль шрифта:
                    <select id="font-family" name="fontFamily" onchange="changeFontFamily(this.value)">
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                    </select>
                </label>
            </div>
            <div>
                <label for="font-size">Размер шрифта:
                    <input type="number" name="fontSize" id="font-size" value="30" onchange="changeFontSize(this.value)" min="10"
                           max="100">
                </label>
            </div>
            <div>
                <label for="text-color">Цвет текста:
                    <input type="color" name="fill" id="text-color" value="#000000" onchange="changeTextColor(this.value)">
                </label>
            </div>
            <div style="display: flex; justify-content: space-between">
                <label for="text-bold">Жирный:
                    <input type="checkbox" name="fontWeight" id="text-bold" onchange="toggleBold(this.checked)">
                </label>
                <label for="text-italic">Курсив:
                    <input type="checkbox" name="fontStyle" id="text-italic" onchange="toggleItalic(this.checked)">
                </label>
            </div>
        </div>
        <button id="deleteButton" class="box-shadow-main">Удалить выбранный элемент</button>
        <button id="downloadButton" class="box-shadow-main"><i class="fas fa-upload"></i> Скачать</button>
        <p><a href="#" data-modal>Подтверждение заказа</a></p>
    </div>
</div>

<div id="modal" class="modal">
    <form id="modalForm">
        <h2>Добавьте контактные данные</h2>
        <label for="name">Ф.И.О:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="phone">Тел:</label>
        <input type="tel" id="phone" name="phone" required><br><br>

        <label for="address">Адрес:</label>
        <input type="text" id="address" name="address" required><br><br>

        <button type="submit">Подтвердить заказ</button>
    </form>
</div>

<div id="modalOverlay" class="modal-overlay"></div>
<div id="successModal" class="modal">
    <div class="modal-content">
        <h2>Order Submitted Successfully!</h2>
        <p>Thank you for your order. We will process it soon.</p>
        <button id="okButton">OK</button>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.0/fabric.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src={{ asset("script/index.js") }}></script>
</body>
</html>
