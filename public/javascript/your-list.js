
const handleUserListSearch = (lists) => {

    const searchResult = text => lists.filter(list => list.toLowerCase().includes(text.toLowerCase()) && text.length > 0);

    const renderResultEl = result => `
        <div>
            <i class="fa fa-search" style="color: #888; margin-right: 10px;">
            </i><span>${result}</span>
        </div>
    `;

    const renderResult = (userInput) => searchResult(userInput).map(renderResultEl).join(" ");

    const handleSearch = (userInput) => {
        const suggestionContEl = document.querySelector("#suggestion-cont");
        suggestionContEl.style.display = (userInput.length > 0) ? "block" : "none";
        suggestionContEl.innerHTML = renderResult(userInput.trim());
    };

    document.querySelector("#search-form").addEventListener('keydown', () => {
        document.querySelector("#search-form").addEventListener('keyup', () => handleSearch(document.querySelector("#search-form").value));
    });

}

async function fetchUserList() {
    const response = await fetch(`/api/lists`, {
        method: 'GET',
    });

    if (response.ok) {
        const data = await response.json();

        const lists = data.map(ele => ele.list_name);

        handleUserListSearch(lists);
    } else {
        alert(response.statusText);
    }
}


fetchUserList();

// add list form
const openAddListForm = () => {
    document.querySelector("#add-list-modal").setAttribute('class', 'modal is-active');
}

const closeAddListForm = () => {
    document.querySelector("#add-list-modal").setAttribute('class', 'modal');
}

document.querySelector("#add-list-icon").addEventListener('click', openAddListForm, false);
document.querySelector("#ad-md-background").addEventListener('click', closeAddListForm, false);

// Create a list
async function addNewList(event) {
    event.preventDefault();

    const list_name = document.querySelector('select[name="lists"]').value;

    const response = await fetch(`/api/lists`, {
        method: 'POST',
        body: JSON.stringify({
            list_name,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/userlist');
        fetchUserList();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#add-list-form').addEventListener('submit', addNewList);

document.addEventListener('click', (event) => {
    if(!event.target.matches("#search-form")) {
        document.querySelector("#suggestion-cont").style.display = "none";
    }
})

