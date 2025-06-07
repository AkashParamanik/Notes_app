import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onclose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState("");
  //Add note
  const addNewNote = async () => {};
  //Edit note
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter title");
      return;
    }
    if (!content) {
      setError("Please enter content");
      return;
    }
    setError("");
    if (type == "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onclose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="text-slate-400 text-xs">TITLE</label>
        <input
          type="text"
          className="text-2xl outline-none text-slate-900"
          placeholder="go to gym at 5 a.m."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-slate-400 text-xs">CONTENT</label>
        <textarea
          type="text"
          className="text-sm outline-none text-slate-900 bg-slate-50 p-2  rounded"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="text-slate-400 text-xs">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
      <button
        className="btn-primary font-medium mt-3 p-3"
        onClick={handleAddNote}
      >
        ADD{" "}
      </button>
    </div>
  );
};

export default AddEditNotes;
