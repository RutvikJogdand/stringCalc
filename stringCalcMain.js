function add(numbers) {
    if (!numbers) return 0;

    if (numbers.includes(',\n') || numbers.includes('\n,')) {
        throw new Error('Invalid input: delimiter followed by newline or newline followed by delimiter');
    }
    console.log('init numbers str ===', numbers)
    let delimiters = [',', '\n'];
     // Check for custom delimiter:
    if (numbers.startsWith('//')) {
      const delimiterSectionEnd = numbers.indexOf('\n'); //Get the delimiter part end
      const delimiterSection = numbers.substring(2, delimiterSectionEnd); //Get entire delimiter section
      numbers = numbers.substring(delimiterSectionEnd + 1);
      customDelimiter = delimiterSection.match(/\[(.*?)\]/g);
      if (customDelimiter) {
        // Handle multiple delimiters
        delimiters = customDelimiter.map(d => d.slice(1, -1));
      } else {
        delimiters = [delimiterSection];
      }
    }
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
  
  module.exports = {
    add
  };
  