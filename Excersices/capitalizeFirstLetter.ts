function capitalizeFirstLetter(s: string): string{
    return s
    .trim()
    .split(/\s+/)
    .map(w => w[0]?.toUpperCase() + w.slice(1).toLocaleLowerCase())
    .join(' ');
}

console.log(capitalizeFirstLetter('hello my friend'))