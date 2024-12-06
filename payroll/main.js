// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Populate the table with data
    populateTable();

    // Add event listeners for apply buttons
    document.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.leave-card');
            const leaveType = card.querySelector('.type').textContent;
            alert(`Applying for ${leaveType}`);
        });
    });

    // Add event listener for export button
    document.querySelector('.export-btn').addEventListener('click', () => {
        alert('Exporting data...');
    });

    // Add event listener for filter button
    document.querySelector('.filter-btn').addEventListener('click', () => {
        alert('Opening filters...');
    });
});