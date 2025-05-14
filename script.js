const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener('change', (e) => {
  size = e.target.value;
  isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
    e.preventDefault();

  let img = document.querySelector('.qr-body img');
  if (img !== null) {
    let imgAtrr = img.getAttribute('src');
    downloadBtn.setAttribute("href", imgAtrr);
  } else {
    let canvas = document.querySelector('canvas');
    if (canvas) {
      let dataURL = canvas.toDataURL("image/png");
      downloadBtn.setAttribute("href", dataURL);
    }
  }
});

function isEmptyInput() {
  qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
  setTimeout(() => {
    let canvas = document.querySelector('canvas');
    if (canvas) {
      let dataURL = canvas.toDataURL("image/png");
      downloadBtn.setAttribute("href", dataURL);
      downloadBtn.setAttribute("download", "QR_Code.png");
    }
  }, 100);
}

}

