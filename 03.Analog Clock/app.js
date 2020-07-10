(function () {
    const config = {
        deg: 6,
    }

    const hands = {
        sec: document.getElementById('sec'),
        min: document.getElementById('min'),
        hr: document.getElementById('hr'),
    };

    setInterval(_ => {
        let date = new Date();

        const clock = {
            sec: date.getSeconds() * config.deg,
            min: date.getMinutes() * config.deg,
            hr: (date.getHours() * 30) + (min/12),
        };
        
        for (let hand in hands) hands[hand].style.transform = `rotateZ(${clock[hand]}deg)`;
    });
})();