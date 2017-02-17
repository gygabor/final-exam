'use strict';

const button = document.querySelector('input');
const text = document.querySelector('p');


function open(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://zerda-reader-mockback.gomix.me/feed');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  xhr.onreadystatechange = function (rsp) {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      callback(JSON.parse(xhr.response));
    }
  };
}

function logFeeds(feeds) {
  console.log(feeds);
  text.innerText = feeds.feed;
}

function renderFeeds() {
  button.addEventListener('click', function () {
    open(logFeeds);
  });
}

renderFeeds();
