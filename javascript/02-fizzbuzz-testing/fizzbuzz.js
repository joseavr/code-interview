function fizzbuzz(input) {

  const isDivBy3 = input % 3 === 0
  const isDivBy5 = input % 5 === 0

  if (input === 1)
    return '1'

  if (isDivBy3 && isDivBy5)
    return 'fizzbuzz'

  if (isDivBy3)
    return 'fizz'

  if (isDivBy5)
    return 'buzz'

  return `${input}`
}

module.exports = fizzbuzz