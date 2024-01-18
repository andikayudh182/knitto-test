

function isPalindrome(str: string): boolean {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  

  const sampleString = 'Malam, malam';
  const result = isPalindrome(sampleString);
  
  console.log(`Is "${sampleString}" a palindrome? ${result ? 'Yes' : 'No'}`);
  