//practice 2
const nameCounts = {};

    // Function to add a name to the list or update its count
    function addName() {
        const nameInput = document.getElementById('name-input');
        const name = nameInput.value.trim();

        // Validate input
        if (name === '') {
            alert('Please enter a name.');
            return;
        }

        // Initialize count if the name is new
        if (!nameCounts[name]) {
            nameCounts[name] = 0;
        }

        // Get the ordered list element
        const nameList = document.getElementById('name-list');
        let found = false;

        // Iterate through existing list items to find the name
        for (let i = 0; i < nameList.length; i++) {
            const item = nameList[i];
            if (item.textContent.startsWith(name)) {
                // Update count for the existing name item
                nameCounts[name]++;
            }
        }

        // If name not found, create a new list item
        if (!found) {
            const newItem = document.createElement('li');
            newItem.textContent = `${name}   0`;
            newItem.className = 'name-item'; // use this line line bc css pointer cursor
            newItem.onclick = function() {
                nameCounts[name]++;
                newItem.textContent = `${name} (${nameCounts[name]})`; //increase vote count
            };
            nameList.appendChild(newItem);
        }

        // Clear the input field
        nameInput.value = '';
    }



    //
// //practice 1
// let countName = {};

//         function addName() {
//             let inputId = document.getElementById("name-input");
//             let inputData = inputId.value.trim();

//             if (inputData === '') {
//                 alert('Please enter a name. You cannot leave the input field empty.');
//                 return;
//             }

//             let orderList = document.getElementById('name-list');
//             let found = false;

//             // Check if the name already exists in the list
//             for (let i = 0; i < orderList.children.length; i++) {
//                 let liElement = orderList.children[i];
//                 if (liElement.textContent.startsWith(inputData)) {
//                     countName[inputData]++;
//                     liElement.textContent = `${inputData} (${countName[inputData]})`;
//                     found = true;
//                     break;
//                 }
//             }

//             // If the name was not found, add a new list item
//             if (!found) {
//                 countName[inputData] = 1;
//                 let liElement = document.createElement('li');
//                 liElement.textContent = `${inputData} (1)`;
//                 liElement.classList.add('name-item');
//                 liElement.onclick = function() {
//                     countName[inputData]++;
//                     liElement.textContent = `${inputData} (${countName[inputData]})`;
//                 };
//                 orderList.appendChild(liElement);
//             }

//             // Clear the input field
//             inputId.value = '';
//         }