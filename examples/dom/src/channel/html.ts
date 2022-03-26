//should auto gen form html
const h = `v0<button>All</button>v1<button>Sub1</button>v2<button>Sub2</button>`
const t = document.createElement("template")
const c = t.content
t.innerHTML = h

export function Html() {
  const content = c.cloneNode(true)
  const c1 = content.childNodes
  return {
    node: content,
    value0Label: c1[0] as Text,
    allButton: c1[1] as HTMLButtonElement,
    value1Label: c1[2] as Text,
    sub1Button: c1[3] as HTMLButtonElement,
    value2Label: c1[4] as Text,
    sub2Button: c1[5] as HTMLButtonElement
  }
}
export type Html = ReturnType<typeof Html>