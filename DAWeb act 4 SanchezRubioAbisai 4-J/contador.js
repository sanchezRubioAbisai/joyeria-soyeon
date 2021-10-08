var end = new Date('10/4/2021 9:30 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('reloj').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        // document.getElementById('reloj').innerHTML = days + ' dias, ';
        var summon_day = days * 24;
        document.getElementById('reloj').innerHTML =  "50% de descuento "
        document.getElementById('reloj').innerHTML += hours + summon_day + ':';
        document.getElementById('reloj').innerHTML += minutes + ':';
        document.getElementById('reloj').innerHTML += seconds ;
    }

    setInterval(showRemaining, 1000);