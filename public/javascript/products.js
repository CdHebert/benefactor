
// add product form
const openAddListForm = () => {
    document.querySelector("#add-product-modal").setAttribute('class', 'modal is-active');
}

const closeAddListForm = () => {
    document.querySelector("#add-product-modal").setAttribute('class', 'modal');
}

document.querySelector("#add-product-icon").addEventListener('click', openAddListForm, false);
document.querySelector("#ap-md-background").addEventListener('click', closeAddListForm, false);

// Create a list
async function addNewProduct(event) {
    event.preventDefault();

    const product_name = document.querySelector('input[name="product-name"]').value;
    const image_link = document.querySelector('input[name="image-link"]').value;
    const store_link = document.querySelector('input[name="store-link"]').value;
    const list_id = document.querySelector('#ap-sub-btn').dataset.listId;

    const response = await fetch(`/api/products`, {
        method: 'POST',
        body: JSON.stringify({
            product_name,
            image_link,
            store_link,
            list_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(document.location.href);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#add-product-form').addEventListener('submit', addNewProduct);

