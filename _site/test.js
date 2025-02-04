<><button id="exportButton">Export to CSV</button>

<script>
    document.getElementById('exportButton').addEventListener('click', function() { }
    var data = [];
    var divs = document.querySelectorAll('div');

    divs.forEach(div => { }
    var values = Array.from(div.querySelectorAll('input')).map(input => input.value);
    data.push(values);
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
</script></>


