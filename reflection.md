How did you dynamically create and append new elements to the DOM?

I dynamically created and appended elements by using document.createElement() to create new DOM nodes, setting their content or attributes, and attaching them to existing elements with appendChild(). This allowed the page to update dynamically without reloading.

What steps did you take to ensure accurate updates to the total price?

I ensured accurate total updates by converting inputs to numbers, recalculating price × quantity whenever items were added or removed, using dataset attributes to track each item, and formatting the total consistently.

How did you handle invalid input for product name or price?

I handled invalid input by checking if the product name, price, or quantity fields were empty before adding an item. If any field was missing, I displayed an alert and exited the function so the item wouldn’t be added to the cart. This prevented incorrect or incomplete data from affecting the total price.

What challenges did you face when implementing the remove functionality?

Identifying the correct item – Since multiple items could exist in the cart, I had to make sure the clicked “remove” button targeted the right <li>. I solved this using event.target.closest("li").

Updating the total accurately – I needed to subtract the removed item’s price × quantity from the total. Initially, forgetting to convert dataset values to numbers caused incorrect totals.

Event handling – I wanted to avoid adding separate listeners to every remove button. Using event delegation on the cart <ul> allowed a single listener to handle all current and future items.

Maintaining clean DOM structure – After removal, I had to make sure the item was fully removed from the DOM without affecting other elements.

