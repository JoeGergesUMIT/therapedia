// Initialize PDF generation
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Set the title and basic layout for the PDF
    pdf.setFontSize(16);
    pdf.text("Stakeholder Brainstorming Form", 10, 10);

    // Fetch all form elements from the HTML
    const formElements = document.getElementById("stakeholderForm").elements;

    let y = 20; // Initial vertical offset for text in PDF

    // Loop through each form element and add its content to the PDF
    for (let element of formElements) {
        // Handle checkboxes that are checked
        if (element.type === "checkbox" && element.checked) {
            pdf.text(`${element.name}: ${element.value}`, 10, y);
            y += 10;
        }
        // Handle text inputs and textareas
        else if ((element.type === "text" || element.tagName === "TEXTAREA") && element.value) {
            // Find the label associated with the current element (if any)
            const label = element.labels ? element.labels[0].innerText : element.name;
            pdf.text(`${label}: ${element.value}`, 10, y);
            y += 10;
        }
        // Handle radio buttons that are selected
        else if (element.type === "radio" && element.checked) {
            pdf.text(`${element.name}: ${element.value}`, 10, y);
            y += 10;
        }
    }

    // Save the generated PDF with a specified filename
    pdf.save("Stakeholder_Brainstorming_Form.pdf");
}
