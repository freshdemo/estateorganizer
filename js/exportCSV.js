document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('exportCSV').addEventListener('click', function() {
    var data = [];
    var header = ["Title", "Values"]; // Add a header row
    data.push(header);
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
  var label = form.querySelector('label');
  var inputs = form.querySelectorAll('input:not([type="button"]):not([type="hidden"])');
  var row = [label ? label.textContent : ''];
  inputs.forEach(function(input) {
    row.push(input.value);
  });
  data.push(row);
});

    var csvContent = "data:text/csv;charset=utf-8," + data.map(row => row.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM after download
  });
});
