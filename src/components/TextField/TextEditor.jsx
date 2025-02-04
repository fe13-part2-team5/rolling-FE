import ReactQuill from "react-quill";

function TextEditor({ content, setContent }) {
  return (
    <ReactQuill
      value={content}
      onChange={setContent}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
      }}
      placeholder={"내용을 작성해주세요."}
    />
  );
}

export default TextEditor;
