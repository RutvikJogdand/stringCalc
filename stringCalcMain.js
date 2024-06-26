function add(numbers) {
    if (!numbers) return 0;

    if (numbers.includes(',\n') || numbers.includes('\n,')) {
        throw new Error('Invalid input: delimiter followed by newline or newline followed by delimiter');
    }
  
    let delimiters = [',', '\n'];
    // Create regex pattern to split by delimiters
    const delimiterPattern = new RegExp(`[${delimiters.join('')}]`);
    const numberArray = numbers.split(delimiterPattern);
  
    let sum = 0;
    let negatives = [];
  
    numberArray.forEach(numStr => {
      const num = parseInt(numStr);
      if (isNaN(num)) return;
      if (num < 0) negatives.push(num);
      if (num <= 1000) sum += num;
    });
  
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
  
    return sum;
  }
  
//   console.log(add("1,2")); // 3
  console.log(add("1\n2,3")); // 6
//   console.log(add("1,\n2,3"))
//   console.log(add("1,-2,3"));
  module.exports = {
    add
  };
  