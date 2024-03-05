interface MyObject {
    sortingDate: string;
    // other properties if any
}

export function sortObjectsDescending(arr: MyObject[]): MyObject[] {
    const sortedArray = [...arr].sort((a, b) => {
        const dateA = new Date(a.sortingDate).getTime();
        const dateB = new Date(b.sortingDate).getTime();

        // Sorting in descending order
        return dateB - dateA;
    });

    return sortedArray;
}

// Example usage:
const inputArray: MyObject[] = [
    { sortingDate: "2024-03-05T08:48:38.332Z" },
    { sortingDate: "2024-03-04T10:30:00.000Z" },
    // add more objects as needed
];

const sortedArray = sortObjectsDescending(inputArray);

console.log(sortedArray);
