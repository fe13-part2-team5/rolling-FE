import StyledQuill from "./TextEditor.style";

function TextEditor({ content, setContent }) {
  return (
    <StyledQuill
      value={content}
      onChange={setContent}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
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
