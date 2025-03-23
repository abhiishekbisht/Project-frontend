import React, { useState } from "react";
import axios from "axios";

const Summarization = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const summarizeText = () => {
    axios.post("http://localhost:5000/summarize", { text })
      .then(res => setSummary(res.data.summary))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Summarization</h2>
      <textarea className="border p-2 w-full" onChange={(e) => setText(e.target.value)} />
      <button onClick={summarizeText} className="bg-blue-500 text-white px-4 py-2">Summarize</button>
      <p className="mt-4">{summary}</p>
    </div>
  );
};

export default Summarization;
