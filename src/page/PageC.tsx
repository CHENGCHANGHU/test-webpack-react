import { useCallback, useRef } from "react";
import { Editor } from "@/component";

export default function() {
  const editor = useRef<any>(null);

  const handleEditorReady = useCallback((monacoEditor: any) => {
    editor.current = monacoEditor;
  }, []);

  return (
    <h1>
      page c
      <Editor language='markdown' onReady={handleEditorReady} />
    </h1>
  );
}