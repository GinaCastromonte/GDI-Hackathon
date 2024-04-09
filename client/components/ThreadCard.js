import React, { useState } from "react";

function ThreadCard({ thread, setThreads, lessonId }) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
    userId: "654c51830aef36adde42f0a0",
    teachingtext: lessonId,
  });

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(process.env.FRONTEND_URL + "/thread", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setThreads((current) => [data, ...current]);
        setShowReplyForm(false);
        setFormData({
          content: "",
        });
      });
  }

  const handleReply = () => {
    setShowReplyForm(true);
  };

  return (
    <>
      <div className={"card"}>
        {thread.content}
        <div>
          <button className="buttons" onClick={handleReply}>
            {"Reply"}
          </button>
        </div>
      </div>
      <div>
        {showReplyForm ? (
          <form onSubmit={handleSubmit} className="card">
            <label>
              {"Reply: "}
              <input
                name="content"
                type="text"
                value={formData.content}
                onChange={handleChange}
                placeholder="Reply here..."
                required
              ></input>
            </label>
            <button className="submit buttons" type="submit">
              {"Submit"}
            </button>
          </form>
        ) : null}
      </div>
    </>
  );
}

export default ThreadCard;
