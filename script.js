window.onload = function() {
    var counter = document.getElementById("counter");
    var count = parseInt(localStorage.getItem("count")) || 0;
    count++;
    counter.innerHTML = count;
    localStorage.setItem("count", count.toString());
};
