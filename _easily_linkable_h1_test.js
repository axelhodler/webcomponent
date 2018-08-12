{
  let component

  QUnit.testStart(() => {
    component = document.createElement('ah-h1')
  })

  QUnit.testDone(() => {
    document.body.removeChild(component)
  })

  QUnit.test("component uses title attribute", assert => {
    const title = 'My Title'
    component.setAttribute('title', title)
    document.body.appendChild(component)

    const actualTitle = document.getElementById('My Title').shadowRoot.querySelector('#title').innerText
    assert.equal(actualTitle, title)
  })

  QUnit.test("component link anchors on title", assert => {
    const id = 'id'
    component.setAttribute('title', id)
    document.body.appendChild(component)

    const ref = document.getElementById(id).shadowRoot.querySelector('#link').getAttribute('href')
    assert.equal(ref, `#${id}`)
  })
}
