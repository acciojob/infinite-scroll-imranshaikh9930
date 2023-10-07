//your code here!

const list = document.getElementById("list");
const totalItems = 10; // Number of initial list items
const itemsToAdd = 2; // Number of items to add when reaching the end

// Function to add items to the list
function addItems() {
	while(i<itemsToAdd){
		  const newItem = document.createElement("li");
        newItem.textContent = `List Item ${totalItems + i}`;
        list.appendChild(newItem);

	}
    // for (let i = 1; i <= itemsToAdd; i++) {
      
    // }
}

// Initial items
addItems();

// Event listener to check if the user has scrolled to the end of the list
list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        // User has scrolled to the end, add more items
        addItems();
    }
})