function testandoApi() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.responseText);

            const json = this.responseText;
            const obj = JSON.parse(json);

            for(var i = 0; i < obj.length; i++) {

            console.log(obj[i].descricao);

            }

            var input = document.getElementById('input1');

            input.value = obj[6].descricao;

        }
    });

    xhr.open("GET", "http://192.168.0.109:8080/cost");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "46602ff6-d18a-89ad-6884-77d809090d72");

    xhr.send(data);



}