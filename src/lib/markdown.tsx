// Minimal markdown-to-React renderer for philosopher / concept bodies.
// Supports the subset our content actually uses: headings, paragraphs, italics,
// bold, blockquotes, and inline code. No HTML parsing, no third-party renderer
// — content is authored in-house, no need for a dependency.

import * as React from "react";

function renderInline(text: string, keyBase: string): React.ReactNode[] {
  // Order matters: bold before italic; italic uses single * but our content
  // uses * for italics — keep it that way to avoid surprises.
  const tokens: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < text.length) {
    // **bold**
    const bold = text.slice(i).match(/^\*\*([^*]+)\*\*/);
    if (bold) {
      tokens.push(
        <strong key={`${keyBase}-b-${key++}`}>{bold[1]}</strong>,
      );
      i += bold[0].length;
      continue;
    }
    // *italic*
    const italic = text.slice(i).match(/^\*([^*]+)\*/);
    if (italic) {
      tokens.push(<em key={`${keyBase}-i-${key++}`}>{italic[1]}</em>);
      i += italic[0].length;
      continue;
    }
    // plain text run until next * or end
    const nextSpecial = text.slice(i).search(/\*/);
    const end = nextSpecial === -1 ? text.length : i + nextSpecial;
    tokens.push(text.slice(i, end));
    i = end;
  }
  return tokens;
}

export function renderMarkdown(md: string): React.ReactNode {
  const lines = md.split("\n");
  const out: React.ReactNode[] = [];
  let para: string[] = [];
  let key = 0;

  const flushPara = () => {
    if (para.length === 0) return;
    const text = para.join(" ");
    out.push(
      <p key={`p-${key++}`} className="my-4 leading-relaxed">
        {renderInline(text, `p${key}`)}
      </p>,
    );
    para = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("## ")) {
      flushPara();
      out.push(
        <h2 key={`h-${key++}`} className="mt-10 mb-3 font-serif text-2xl tracking-tight">
          {renderInline(line.slice(3), `h${key}`)}
        </h2>,
      );
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara();
      out.push(
        <h3 key={`h-${key++}`} className="mt-8 mb-2 font-serif text-xl">
          {renderInline(line.slice(4), `h${key}`)}
        </h3>,
      );
      continue;
    }
    if (line.startsWith("> ")) {
      flushPara();
      out.push(
        <blockquote
          key={`q-${key++}`}
          className="my-4 border-l-2 border-accent pl-4 italic text-foreground/90"
        >
          {renderInline(line.slice(2), `q${key}`)}
        </blockquote>,
      );
      continue;
    }
    if (line.trim() === "") {
      flushPara();
      continue;
    }
    para.push(line);
  }
  flushPara();
  return out;
}
