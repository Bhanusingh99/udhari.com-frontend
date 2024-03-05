export function getRandomColor(): string {
  const tailwindColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-yellow-700',
    'bg-indigo-700',
    'bg-pink-700',
    'bg-purple-700'
  ];
  
  
    // Pick a random color class from the array
    const randomColorClass = tailwindColors[Math.floor(Math.random() * (tailwindColors.length))];
  
    return randomColorClass;
  }
  
