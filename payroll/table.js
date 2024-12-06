function populateTable() {
    const tableBody = document.querySelector('#leaveTable tbody');
    tableBody.innerHTML = '';

    leaveData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.duration}</td>
            <td>${entry.startDate}</td>
            <td>${entry.endDate}</td>
            <td>${entry.type}</td>
            <td>${entry.reason}</td>
            <td>
                <button class="action-btn">Actions</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}