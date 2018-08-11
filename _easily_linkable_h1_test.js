QUnit.test("component uses title attribute", assert => {
  const title = 'My Title'
  let component = document.createElement('ah-h1')
  component.setAttribute('title', 'My Title')
  document.body.appendChild(component)

  const actualTitle = document.getElementById('My Title').shadowRoot.querySelector('h1 > span').innerText
  assert.equal(actualTitle, title)
})
