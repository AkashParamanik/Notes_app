import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";

const AddEditNotes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <div>
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
      <button className="btn-primary font-medium mt-3 p-3">ADD </button>
    </div>
  );
};

export default AddEditNotes;
