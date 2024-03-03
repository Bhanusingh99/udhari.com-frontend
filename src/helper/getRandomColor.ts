export function getRandomColor(): string {
    const tailwindColors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-indigo-500',
      // Add more Tailwind CSS color classes as needed
    ];
  
    // Pick a random color class from the array
    const randomColorClass = tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
  
    return randomColorClass;
  }
  
