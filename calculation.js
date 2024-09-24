
function calculateLoadFactor() {
    const energy = parseFloat(document.getElementById('energy').value);
    const peak = parseFloat(document.getElementById('peak').value);
    const days = parseInt(document.getElementById('days').value);
    if (isNaN(energy) || isNaN(peak) || isNaN(days) || peak === 0 || days === 0) {
        alert('Please enter valid values.');
        return;
    }
    const totalHours = days * 24;
    const averageLoad = energy / totalHours;
    const loadFactor = (averageLoad / peak) * 100;
    document.getElementById('loadFactor').textContent = loadFactor.toFixed(2) + '%';
}
