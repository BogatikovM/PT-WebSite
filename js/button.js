var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://w.forfun.com/fetch/8a/8af16b056ea2b736e30855cd28759ddd.jpeg";
        document.getElementById("demo").appendChild(img);
    }
}