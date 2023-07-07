import { Editor } from "@/components/Editor";
import { Chat } from "@/components/Chat";

export default function EditorPage() {
  return (
    <main className="flex">
      <Editor/>
      <Chat />
    </main>
  );
}
