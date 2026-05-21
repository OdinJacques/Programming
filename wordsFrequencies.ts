function wordCount(text: string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const word of text.toLowerCase().split(/\s+/)) {
    if (word) counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

console.log(wordCount("The cat sat on the mat"))