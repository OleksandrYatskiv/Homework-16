const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
}

removeElement(array, 2);
console.log(array);