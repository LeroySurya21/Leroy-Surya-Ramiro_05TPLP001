// Function to display specific section based on menu selection
function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Set default view to "Karyawan" section
document.addEventListener("DOMContentLoaded", function() {
    showSection("karyawan");
});
