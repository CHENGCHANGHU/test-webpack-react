import { useEffect, useRef } from "react";
import * as monaco from 'monaco-editor';
import './Editor.scss';

export default function Editor({
  language = 'markdown',
  wordWrapColumn = 120,
  onReady,
}: {
  language?: 'markdown';
  wordWrapColumn?: number;
  onReady: (monacoEditor: any) => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef?.current) {
      return;
    }
    onReady(monaco.editor.create(
      editorRef.current,
      {
        value: '',
        language,
        fontSize: 14,
        tabSize: 2,
        wrappingStrategy: 'advanced',
        wordWrap: 'wordWrapColumn',
        wordWrapColumn,
      }
    ));
  }, [onReady]);

  return (
    <div className="editor" ref={editorRef}></div>
  );
};
