'use client'
import Prism from "prismjs";
import { useEffect } from "react";

export default function CodeSnippet({language, code}) {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism 
    };
    highlight(); // <--- call the async function
  }, )
  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

