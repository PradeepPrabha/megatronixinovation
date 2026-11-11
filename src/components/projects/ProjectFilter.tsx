export function ProjectFilter({ categories, active, onChange }: { categories: string[]; active: string; onChange: (c: string) => void }) {
  return (
    <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap justify-center gap-2">
      {categories.map(c => (
        <button key={c} type="button" aria-pressed={active === c} onClick={() => onChange(c)}
          className={`min-h-[40px] rounded-full px-4 text-sm font-semibold transition-colors ${active === c ? 'bg-brand text-white shadow-brand' : 'border border-gray-200 bg-white hover:border-brand hover:text-brand'}`}>{c}</button>
      ))}
    </div>
  )
}
