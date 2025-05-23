export function sluggify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')       // remove non-alphanumeric chars except space
    .trim()
    .replace(/\s+/g, '_')              // replace spaces with underscores
    .replace(/^(\d)/, '_$1');          // prefix underscore if it starts with a digit
}