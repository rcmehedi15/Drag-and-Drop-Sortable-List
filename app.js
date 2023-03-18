var sortableList = document.getElementById('sortable-list');

sortableList.addEventListener('dragstart', function(e) {
  var li = e.target;
  e.dataTransfer.setData('text/plain', li.innerHTML);
});

sortableList.addEventListener('dragover', function(e) {
  e.preventDefault();
  var li = e.target;
  if (li.tagName === 'LI') {
    var rect = li.getBoundingClientRect();
    if (e.clientY > rect.top + rect.height / 2) {
      li.parentNode.insertBefore(li, li.nextSibling);
    } else {
      li.parentNode.insertBefore(li, li.previousSibling);
    }
  }
});

sortableList.addEventListener('dragend', function(e) {
  e.preventDefault();
});
