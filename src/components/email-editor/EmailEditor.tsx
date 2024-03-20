import { prepend } from 'domutils'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import parse  from 'html-react-parser'
import { useRef, useState } from 'react'
import { ApplyStyle, TStyle } from './apply-style'
import styles from './EmailEditor.module.scss'

export function EmailEditor() {
  const [text,setText] = useState(`Hey, Alex
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus reiciendis tempore repellendus veritatis sapiente voluptate ratione distinctio assumenda at.`)
  
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

  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.preview}>
        {parse(text)}
      </div>
      <div className={styles.card}>

        <textarea
          ref={textRef}
          className={styles.editor} 
          spellCheck='false'
          onSelect={updateSelection}
          value={text}
          onChange={e => setText(e.target.value)}
          >
          {text}
        </textarea>

        <div className={styles.actions}>
          <div className={styles.tools}>
              <button><Eraser size={17} onClick={() => setText('')}/></button>
              <button><Bold size={17} onClick={() => appplyFormat('bold')}/></button>
              <button><Italic size={17} onClick={() => appplyFormat('italic')}/></button>
              <button><Underline size={17} onClick={() => appplyFormat('underline')}/></button>
          </div>
          <button>Send now</button>
        </div>

      </div>
    </div>
  )
}