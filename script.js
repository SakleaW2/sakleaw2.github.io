function showModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    modal.style.display = "block";
}

function hideModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    modal.style.display = "none";
}