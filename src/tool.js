module.exports.formGenerator = (inputs) => {
  let html = '<form>'

  for (let i = 0; i < inputs.length; i++) {
    if (
      inputs[i].type === 'text' ||
      inputs[i].type === 'email' ||
      inputs[i].type === 'number' ||
      inputs[i].type === 'submit'
    ) {
      html += `<input type="${inputs[i].type}"></input>`
    }
  }
  html += '</form>'
  return html
}