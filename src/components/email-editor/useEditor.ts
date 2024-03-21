import { useRef, useState } from "react"
import { ApplyStyle, TStyle } from "./apply-style"

export function useEditor() {
    const [text,setText] = useState(`Enter email!`)
  
    const [selectionStart,setSelectionStart] = useState(0)
    const [selectionEnd,setSelectionEnd] = useState(0)
  
    const textRef = useRef<HTMLTextAreaElement | null>(null)
    
    const updateSelection = () => {
        if(!textRef.current) return
        setSelectionStart(textRef.current.selectionStart)
        setSelectionEnd(textRef.current.selectionEnd)
      }
    
      const appplyFormat = (type: TStyle) => {
        const selectedText = text.substring(selectionStart,selectionEnd)
    
        if (!selectedText) return
    
        const before = text.substring(0,selectionStart)
    
        const after = text.substring(selectionEnd)
    
        setText(before + ApplyStyle(type, selectedText) + after)
    
        //console.log(selectedText)
      }

    return {text,appplyFormat,updateSelection,textRef,setText}
}