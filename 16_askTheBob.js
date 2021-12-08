function hey(message) {
    if (message.endsWith('?')) {
  return 'Sure.';
}

if (message.endsWith('!')) {
  return 'Whoa, chill out!';
}

if (message.trim() === '') {
  return 'Fine. Be that way!';
}

return 'Whatever.';
}
