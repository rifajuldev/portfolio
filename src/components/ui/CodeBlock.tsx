'use client'

import { cn } from '@/lib/cn'
import { useState } from 'react'
import { RiCheckLine, RiFileCopyLine } from 'react-icons/ri'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  className?: string
}

export default function CodeBlock({ code, language = 'tsx', filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const lines = code.replace(/\n$/, '').split('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={cn('border-border-1 bg-bg-4 my-6 overflow-hidden rounded-xl border shadow-(--shadow-2)', className)}
    >
      <div className="border-border-1 bg-bg-3 flex items-center justify-between gap-3 border-b px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="bg-system-danger/80 h-2.5 w-2.5 rounded-full" />
            <span className="bg-system-warning/80 h-2.5 w-2.5 rounded-full" />
            <span className="bg-primary-2/80 h-2.5 w-2.5 rounded-full" />
          </span>
          {filename ? (
            <span className="truncate font-mono text-xs text-neutral-400">{filename}</span>
          ) : (
            <span className="text-xs tracking-wide text-neutral-500 uppercase">Snippet</span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="bg-primary-2/10 text-primary-2 rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase">
            {language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="border-border-1 hover:border-primary-2 hover:text-primary-2 flex h-8 w-8 items-center justify-center rounded-lg border text-neutral-400 transition"
            aria-label={copied ? 'Copied' : 'Copy code'}
          >
            {copied ? <RiCheckLine size={15} className="text-primary-2" /> : <RiFileCopyLine size={15} />}
          </button>
        </div>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 md:text-sm">
        <code>
          {lines.map((line, index) => (
            <div key={index} className="flex min-w-0">
              <span className="w-8 shrink-0 pr-4 text-right text-neutral-500 select-none">{index + 1}</span>
              <span className="min-w-0 flex-1 whitespace-pre text-neutral-100">{line.length ? line : ' '}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}
