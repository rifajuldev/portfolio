import CodeBlock from '@/components/ui/CodeBlock'
import { BlogContentBlock } from '@/types'

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="text-neutral-0 font-semibold">
              {part.slice(2, -2)}
            </strong>
          )
        }

        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={index}
              className="border-border-1 bg-bg-4 text-primary-2 rounded-md border px-1.5 py-0.5 font-mono text-[0.85em]"
            >
              {part.slice(1, -1)}
            </code>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </>
  )
}

export default function BlogContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="max-w-none space-y-6 text-neutral-300">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h3 key={index} className="text-neutral-0 mt-10 mb-4 text-xl font-bold md:text-2xl">
              {block.text}
            </h3>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="space-y-3">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3 text-base leading-relaxed md:text-lg">
                  <span className="bg-primary-2 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === 'code') {
          return <CodeBlock key={index} code={block.code} language={block.language} filename={block.filename} />
        }

        return (
          <p key={index} className="text-base leading-relaxed md:text-lg">
            <RichText text={block.text} />
          </p>
        )
      })}
    </div>
  )
}
