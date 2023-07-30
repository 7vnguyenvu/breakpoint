export default (filepath) => {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", `../${filepath}`, true);

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhttp.responseText);
            }
        };

        xhttp.send();
    });
};
