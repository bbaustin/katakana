class CSVReader extends React.Component {
    handleFiles = (files) => {
        // Check for the various File API support.
        if (window.FileReader) {
            // FileReader are supported.
            this.getAsText(files[0]);
        }
    }

    getAsText(fileToRead) {
        var reader = new FileReader();
        // Read file into memory as UTF-8      
        reader.readAsText(fileToRead);
        // Handle errors load
        reader.onload = this.fileReadingFinished;
        reader.onerror = this.errorHandler;
    }

    processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = allTextLines.map(data => data.split(';'))

        console.log(lines)
    }

    fileReadingFinished(event) {
        var csv = event.target.result;
        processData(csv);
    }

    errorHandler(event) {
        if (event.target.error.name === "NotReadableError") {
            alert("Cannot read file!");
        }
    }

    render() {
        return(
            <input 
                type="file" 
                onchange={ this.handleFiles }
                accept=".csv" 
            />
        )
    }
}
