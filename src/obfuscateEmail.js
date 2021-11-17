export default function obfuscateEmail(email) {
  return email
    .split('')
    .map((c) =>
      Math.random() > 0.5
        ? `&#x${c.charCodeAt(0).toString(16)};`
        : `&#${c.charCodeAt(0)};`
    )
    .join('')
}
