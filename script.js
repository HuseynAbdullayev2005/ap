const tbody = document.querySelector("tbody");

async function getAll() {
    const response = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel");
    const data = await response.json();
    console.log(data);
}

async function generateTable() {
    const response = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel");
    const data = await response.json();

    data.forEach(element => {
        let newLine = document.createElement("tr");
        newLine.classList.add("new");
        newLine.innerHTML = `<td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.prize}</td>
            <td>${element.about}</td>
            <td class="delete_button"><i class="fa-solid fa-trash"></i></td>
            <td class="update_button"><a href="adminPanelUpdate.html#${element.id}"><i class="fa-solid fa-pen"></i></a></td>`;

        tbody.appendChild(newLine);

        const deletebtn = newLine.querySelector(".delete_button");
        deletebtn.onclick = async () => {
            await deleteById(element.id);
            tbody.innerHTML = "";
            generateTable();
        };
    });
}

generateTable();




async function deleteById(id) {
    const res = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}







