function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.classList.add("dragging");
    ev.dataTransfer.effectAllowed = "move";
}

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    const target = ev.target.closest("li");
    if (target) {
        target.classList.add("over");
    }
}

function dropHandler(ev) {
    ev.preventDefault();

    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const target = ev.target.closest("li");

    if (target && draggedElement !== target) {
        const list = target.parentNode;
        const items = Array.from(list.children);
        const draggedIndex = items.indexOf(draggedElement);
        const targetIndex = items.indexOf(target);

        if (draggedIndex < targetIndex) {
            list.insertBefore(draggedElement, target.nextSibling);
        } else {
            list.insertBefore(draggedElement, target);
        }
    }
    document.querySelectorAll("li").forEach(li => li.classList.remove("over"));
}

function dragendHandler(ev) {
    ev.target.classList.remove("dragging");
}

function dragleaveHandler(ev) {
    const target = ev.target.closest("li");
    if (target) {
        target.classList.remove("over");
    }
}