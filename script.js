function showResume(pdfFileName) {
    // Construct the file path to the PDF
    const pdfPath = `D:/Gitam/CN assigment/${pdfFileName}`; // Path to your PDF files
    
    // Fetch the PDF content
    fetch(pdfPath)
        .then(response => response.blob())
        .then(blob => {
            // Create a URL for the blob
            const objectURL = URL.createObjectURL(blob);
            
            // Display the PDF in the resumeContainer
            document.getElementById('resumeContainer').innerHTML = `<embed src="${objectURL}" width="100%" height="600px" type="application/pdf">`;
        })
        .catch(error => console.error('Error fetching PDF:', error));
}
