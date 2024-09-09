const backendUrl = window.location.protocol + '//' + window.location.host

const canvas = new fabric.Canvas('printCanvas', {
    width: document.getElementById('canvas').offsetWidth - 10,
    height: document.getElementById('canvas').offsetHeight - 10
});

document.getElementById('deleteButton').addEventListener('click', deleteSelected);
document.getElementById('downloadButton').addEventListener('click', downloadImage);

function uploadImage(e, fitSize = false) {
    const reader = new FileReader();
    reader.onload = function (event) {
        fabric.Image.fromURL(event.target.result, function (img) {
            const imgWidth = img.width;
            const imgHeight = img.height;
            const scaleFactor = fitSize ? 0.35 : Math.min(canvas.width / imgWidth, canvas.height / imgHeight);
            img.scale(scaleFactor - 0.02);
            img.set({
                left: canvas.width / 2,
                top: canvas.height / 2,
                cornerStyle: 'circle',
                cornerSize: 10,
                padding: 10,
                hasBorders: true,
                hasControls: true,
                lockScalingFlip: true,
                originX: 'center',
                originY: 'center'
            });
            canvas.add(img);
            canvas.setActiveObject(img);
            canvas.renderAll();
        });
    };
    reader.readAsDataURL(e.target.files[0]);
}

function deleteSelected() {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.remove(activeObject);
        canvas.renderAll();
    }
}

function sendToBack() {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.sendToBack(activeObject);
        canvas.renderAll();
    }
}

function bringToFront() {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.bringToFront(activeObject);
        canvas.renderAll();
    }
}

function downloadImage() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1.0
    });

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-image.png';
    link.click();
}

const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('imageUpload');

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    uploadImage({ target: { files: e.dataTransfer.files } }, true);
});

dropzone.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    uploadImage(e);
});

async function addText(options) {
    const text = document.getElementById('textInput').value;
    if (!text.trim()) return;
    const defaultOptions = {
        left: canvas.width / 2 - 15,
        top: canvas.height / 3,
        fontSize: 30,
        fill: 'black',
        editable: true,
        cornerStyle: 'circle',
        cornerSize: 10,
        padding: 10,
        hasBorders: true,
        hasControls: true
    }
    let opt =  await {...defaultOptions, ...options}

    const textObj = new fabric.Text(text, opt);

    canvas.add(textObj);
    canvas.setActiveObject(textObj);
    canvas.renderAll();
}

async function getOptions() {
    let options = {}
    let inputs = await $('.editor').find('input,select').filter(function (index, el ) {
       return $(el).attr('id') != 'textInput';
    })

    for (const [index, el] of Object.entries(inputs)) {
        switch (el.name) {
            case 'fontWeight':
                options[el.name] = $(`[name="${el.name}"]`).attr('data-value') ?? 'normal'
                break;
            case 'fontStyle':
                options[el.name] = $(`[name="${el.name}"]`).attr('data-value') ?? 'normal'
                break;
            default:
                if (el.name !== undefined) {
                    options[el.name] = el.value
                }
        }
    }

    return options;
}

function editText(newText) {
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
        activeObject.set({ text: newText });
        canvas.renderAll();
    }
}

// Listen for object selection
function updateTextInput(textObject) {
    const textInput = document.getElementById('textInput');
    if (textObject && textObject.type === 'text') {
        textInput.value = textObject.text;
    } else {
        textInput.value = '';
    }
}

function updateFontSize(textObject) {
    const fontSize = document.getElementById('font-size');
    if (textObject && textObject.type === 'text') {
        fontSize.value = textObject.fontSize
    }
}

function updateFontFamily(textObject) {
    const fontFamily = document.getElementById('font-family');
    if (textObject && textObject.type === 'text') {
        fontFamily.value = textObject.fontFamily
    }
}
function updateFontWeight(textObject) {
    const fontWeight = document.getElementById('text-bold');
    if (textObject && textObject.type === 'text') {
        fontWeight.checked = textObject.fontWeight  === 'bold' ? 'checked' : ''
    }
}

function updateFontStyle(textObject) {
    const fontStyle = document.getElementById('text-italic');
    if (textObject && textObject.type === 'text') {
        fontStyle.checked = textObject.fontStyle  === 'italic' ? 'checked' : ''
    }
}

function updateFontColor(textObject) {
    const fontColor = document.getElementById('text-color');
    if (textObject && textObject.type === 'text') {
        fontColor.value = textObject.fill
    }
}

function updateAllTextInputs(activeObject) {
    updateTextInput(activeObject);
    updateFontSize(activeObject);
    updateFontFamily(activeObject);
    updateFontWeight(activeObject);
    updateFontStyle(activeObject);
    updateFontColor(activeObject);
}
// Listen for object selection using 'object:selected'
canvas.on('selection:created', function(e) {
    const activeObject = canvas.getActiveObject();
    updateAllTextInputs(activeObject);
});

canvas.on('selection:updated', function(e) {
    const activeObject = canvas.getActiveObject();
    updateAllTextInputs(activeObject);
});

canvas.on('object:selected', function(e) {
    const activeObject = e.target;
    updateAllTextInputs(activeObject);
});

// Listen for deselection to clear the input field
canvas.on('selection:cleared', function() {
    setDefaultValues()
});

function setDefaultValues() {
    document.getElementById('textInput').value = '';
    document.getElementById('font-family').value = document.getElementById('font-family').children[0].value;
    document.getElementById('font-size').value = 30;
    document.getElementById('text-color').value = '#000000';
    document.getElementById('text-bold').checked = '';
    document.getElementById('text-italic').checked = '';
}

// Изменение семейства шрифтов
function changeFontFamily(fontFamily) {
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
        activeObject.set({ fontFamily: fontFamily });
        canvas.renderAll();
    } else {
        $('#font-family').value = fontFamily
    }
}

// Изменение размера шрифта
function changeFontSize(fontSize) {
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
        activeObject.set({ fontSize: parseInt(fontSize, 10) });
        canvas.renderAll();
    } else {
        $('#font-size').value = fontSize
    }
}

// Изменение цвета текста
function changeTextColor(color) {
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
        activeObject.set({ fill: color });
        canvas.renderAll();
    } else {
        $('#text-color').val(color);
    }
}

// Переключение жирного текста
function toggleBold(isBold) {
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
        activeObject.set({ fontWeight: isBold ? 'bold' : 'normal' });
        canvas.renderAll();
    } else {
        $('#text-bold').attr('data-value', isBold ? 'bold' : 'normal');
        $('#text-bold').attr('checked', isBold ? 'checked' : '');
    }
}

// Переключение наклонного текста
function toggleItalic(isItalic) {
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'text') {
        activeObject.set({ fontStyle: isItalic ? 'italic' : 'normal' });
        canvas.renderAll();
    } else {
        $('#text-italic').attr('data-value', isItalic ? 'italic' : 'normal');
        $('#text-italic').attr('checked', isItalic ? 'checked' : '');
    }
}

function clearCanvas() {
    canvas.clear();
    canvas.renderAll();
}

function clearSelection() {
    canvas.discardActiveObject(); // Deselect active object
    canvas.renderAll();           // Re-render the canvas
}

function uploadImageFromImgTag(imgElement) {
    const imageSrc = imgElement.src;
    fetch(imageSrc)
        .then(response => response.blob())
        .then(blob => {
            const file = new File([blob], "image.png", { type: blob.type });
            uploadImage({ target: { files: [file] } });
        })
        .catch(error => console.error('Error fetching the image:', error));
}

function sendOrder() {
    let data = {};

    data.image = canvas.toDataURL({
        format: 'png',
        quality: 1.0
    });
    data.name = $('#name').val();
    data.phone = $('#phone').val();
    data.address = $('#address').val();
    const url = backendUrl + '/api/';
    axios.post(url, data).then((response) => {
        $('#modalForm').hide();
        $('#successModal').modal();
    }).catch(error => console.log(error.message));
}

$(function () {

    $('#addText').on('click', async function (e) {
        e.preventDefault();
        const options = await getOptions();
        await addText(options)
    })



    $('.tshirt-image').on('click', function (e) {
        clearCanvas();
        $(this).parent().find('img').removeClass('active')
        $(this).addClass('active')
        uploadImageFromImgTag(this)
    })

    $(document).on('click', function (e) {
        if (!$(e.target).is('input, select')) {
            if (!canvas.wrapperEl.contains(e.target)) {
                clearSelection(); // Clear canvas selection when clicked outside
            }
        }
    })

    $('a[data-modal]').click(function (e) {
        e.preventDefault();
        $('#modal').modal()
    })

    $('#modalForm').on('submit', function (e) {
        e.preventDefault();
        sendOrder();
    })

    $('#okButton').on('click', async function (e) {
        e.preventDefault();
        window.location.reload();
    })
})
