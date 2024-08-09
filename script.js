//your JS code here. If required.
function removeColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOptionIndex = colorSelect.selectedIndex;

    if (selectedOptionIndex !== -1) { // Check if an option is selected
        colorSelect.remove(selectedOptionIndex);
    }
}
