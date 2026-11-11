import { useEffect } from 'react'
export function useSEO(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Megatronix Innovation`
    const set = (sel: string, attr: string, key: string, val: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(sel)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
      el.setAttribute('content', val)
    }
    set('meta[name="description"]', 'name', 'description', description)
    set('meta[property="og:title"]', 'property', 'og:title', `${title} | Megatronix Innovation`)
    set('meta[property="og:description"]', 'property', 'og:description', description)
  }, [title, description])
}
