// Паспорт стиля для REquinki: номера разделов, «эхо»-контур заголовков, часы в шапке, виньетка.
(function () {
  var names = { services: "SERVICES.EXE", works: "WORKS.DIR", order: "REQUEST.TXT", about: "IDENTITY.EXE" };
  document.querySelectorAll("section").forEach(function (sec, i) {
    var key = sec.id.replace("s-", "");
    sec.querySelectorAll("h2").forEach(function (h, j) {
      h.dataset.t = h.textContent.trim();
      h.dataset.idx = "§0" + (i + 1) + (j ? "." + j : "") + " // " + (names[key] || key.toUpperCase());
    });
  });

  var bg = document.querySelector(".bg");
  if (bg) { var v = document.createElement("div"); v.className = "vign"; bg.appendChild(v); }

  // часы по Москве вместо статичного статуса справа в шапке
  var top = document.querySelector(".hud-top span:last-child");
  if (top) {
    var clock = document.createElement("span");
    clock.className = "clock";
    top.insertAdjacentText("beforeend", " · ");
    top.appendChild(clock);
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    var tick = function () {
      var d = new Date(), m = new Date(d.getTime() + (d.getTimezoneOffset() + 180) * 60000);
      clock.textContent = p(m.getHours()) + ":" + p(m.getMinutes());   // без секунд — короче строка
    };
    tick(); setInterval(tick, 1000);
  }
})();
