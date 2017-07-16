(function() {
  'use strict';

  var pannel_0_ele = document.getElementById('pannel_0');
  var pannel_1_ele = document.getElementById('pannel_1');
  var pannel_2_ele = document.getElementById('pannel_2');
  var btn_0_ele = document.getElementById('btn_0');
  var btn_1_ele = document.getElementById('btn_1');
  var btn_2_ele = document.getElementById('btn_2');
  var spinBtn = document.getElementById('spinBtn');
  var pannel_0_timer;
  var pannel_1_timer;
  var pannel_2_timer;
  var stop_count;
  var isStarted;
  var results;
  var isBtn0Clicked;
  var isBtn1Clicked;
  var isBtn2Clicked;

  var displayElements = [
    '☆', '♪', '○', '□', '△', '♡', '7'
  ];

  function init() {
    isStarted = false;
    results = [];
    stop_count = 0;
    isBtn0Clicked = false;
    isBtn1Clicked = false;
    isBtn2Clicked = false;
    pannel_0_timer = '';
    pannel_1_timer = '';
    pannel_2_timer = '';
  }

  init();

  function checkResult() {
    spinBtn.className = "";
    if (results[0] !== results[1] && results[0] !== results[2]) {
      pannel_0_ele.className = 'pannel unmatched';
    }
    if (results[1] !== results[0] && results[1] !== results[2]) {
      pannel_1_ele.className = 'pannel unmatched';
    }
    if (results[2] !== results[1] && results[2] !== results[0]) {
      pannel_2_ele.className = 'pannel unmatched';
    }

    init();
  }

  // STOPボタンの処理
  btn_0_ele.addEventListener('click', function() {
    if (isStarted == true && isBtn0Clicked == false) {
      isBtn0Clicked = true;
      clearInterval(pannel_0_timer);
      this.className = "btn inactive";
      stop_count++;
      results[0] = pannel_0_ele.innerText;
      if (stop_count == 3) {
        checkResult();
      }
    } else {
      return;
    }
  });
  btn_1_ele.addEventListener('click', function() {
    if (isStarted == true && isBtn1Clicked == false) {
      isBtn1Clicked = true;
      clearInterval(pannel_1_timer);
      this.className = "btn inactive";
      stop_count++;
      results[1] = pannel_1_ele.innerText;
      if (stop_count == 3) {
        checkResult();
      }
    } else {
      return;
    }
  });
  btn_2_ele.addEventListener('click', function() {
    if (isStarted == true && isBtn2Clicked == false) {
      isBtn2Clicked = true;
      clearInterval(pannel_2_timer);
      this.className = "btn inactive"
      stop_count++;
      results[2] = pannel_2_ele.innerText;
      if (stop_count == 3) {
        checkResult();
      }
    } else {
      return;
    }
  });

  // SPINボタンの処理
  spinBtn.addEventListener('click', function() {
    // パネルが回る処理
    if (!isStarted) {
      isStarted = true;
      pannel_0_ele.className = "pannel";
      pannel_1_ele.className = "pannel";
      pannel_2_ele.className = "pannel";
      spinBtn.className = 'inactive';
      btn_0_ele.className = 'btn';
      btn_1_ele.className = 'btn';
      btn_2_ele.className = 'btn';
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
    } else {
      return;
    }
  });
})();
