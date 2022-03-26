//should auto gen form html
const h = `v<button>inc</button><button>dec</button>`
const t = document.createElement("template")
const c = t.content
t.innerHTML = h

export function Html() {
  const content = c.cloneNode(true)
  const c1 = content.childNodes
  return {
    node: content,
    valueLabel: c1[0] as Text,
    incButton: c1[1] as HTMLButtonElement,
    decButton: c1[2] as HTMLButtonElement
  }
}
export type Html = ReturnType<typeof Html>