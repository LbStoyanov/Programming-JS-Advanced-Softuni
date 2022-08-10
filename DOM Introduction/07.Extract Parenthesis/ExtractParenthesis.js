function extract(content) {
  let contentElements = document.getElementById(content);

  let pattern = /\(([^(]+)\)/g;
  let matches = contentElements.textContent.matchAll(pattern);
  let result = [];
  for (const match of matches) {
    result.push(match[1]);
  }

  return result.join('; ');
}
