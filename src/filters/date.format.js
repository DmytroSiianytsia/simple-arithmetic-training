export default function dateFormat(value) {
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  return Intl.DateTimeFormat('uk-UA', options).format(value)
}
