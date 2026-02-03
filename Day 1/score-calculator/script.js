function calculateScore() {
    const semester1 = parseFloat(document.getElementById('semester1').value) || 0;
    const semester2 = parseFloat(document.getElementById('semester2').value) || 0;
    
    const average = (semester1 + semester2) / 2;
    
    document.getElementById('summarise').value = average.toFixed(15);
    
    let result = '';
    if (average >= 9.0) {
        result = 'Hoc sinh gioi';
    } else if (average >= 8.0) {
        result = 'Hoc sinh kha';
    } else if (average >= 6.5) {
        result = 'Hoc sinh trung binh';
    } else {
        result = 'Hoc sinh yeu';
    }
    
    document.getElementById('resultText').textContent = result;
}

function resetForm() {
    document.getElementById('semester1').value = '9';
    document.getElementById('semester2').value = '10';
    document.getElementById('year').value = '2';
    document.getElementById('summarise').value = '9.571428571428571';
    document.getElementById('resultText').textContent = 'Hoc sinh gioi';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('semester1').addEventListener('input', calculateScore);
    document.getElementById('semester2').addEventListener('input', calculateScore);
});

