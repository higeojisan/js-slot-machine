(function() {
  'use strict';

  var pannel_0_ele = document.getElementById('pannel_0');
  var pannel_1_ele = document.getElementById('pannel_1');
  var pannel_2_ele = document.getElementById('pannel_2');
  var spinBtn = document.getElementById('spinBtn');
  var pannel_0_timer;
  var pannel_1_timer;
  var pannel_2_timer;

  var displayElements = [
    '☆', '♪', '○', '□', '△', '♡', '7'
  ];

  spinBtn.addEventListener('click', function() {
    // パネルが回る処理
    pannel_0_timer = setInterval(function() {
      var displayEle = displayElements[Math.floor(Math.random() * displayElements.length)];
      pannel_0_ele.innerText = displayEle;
    }, 200);
    pannel_1_timer = setInterval(function() {
      var displayEle = displayElements[Math.floor(Math.random() * displayElements.length)];
      pannel_1_ele.innerText = displayEle;
    }, 200);
    pannel_2_timer = setInterval(function() {
      var displayEle = displayElements[Math.floor(Math.random() * displayElements.length)];
      pannel_2_ele.innerText = displayEle;
    }, 200);
  });
})();
