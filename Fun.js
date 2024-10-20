const fileInput = document.querySelector("input"),
    downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Descargando archivo...";
    fetchFile(fileInput.value);
});

const fetchFile = (url) => {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let atag = document.createElement("a");
        atag.href = tempUrl;

        atag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download File";

    });
}