import { useCallback, useRef } from "react";
import { stringify } from '@golden-tiger/serializer';
import { Editor } from "@/component";

export default function() {
  const editor = useRef<any>(null);

  const handleEditorReady = useCallback((monacoEditor: any) => {
    editor.current = monacoEditor;
  }, []);

  return (
    <>
      <h1>
        page b
      </h1>
      <div>
        {stringify([true, 123, 'abc'])}
        <Editor language='markdown' onReady={handleEditorReady} />
      </div>
    </>
  );
}