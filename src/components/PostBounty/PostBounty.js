import React, { useContext } from 'react';
import Context from '../../Context';

export default function PostBounty() {
  const context = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    const newBug = {
      title: e.target.title.value,
      description: e.target.description.value,
      screenshots: [e.target.screenshots.value],
      date: date
    }

    context.postNewBounty(newBug);
  };

  return (
    <div className="post-bounty-component">
      <form className="force-column" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" type="text" placeholder="Bug Title" />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" placeholder="type description here" />
        <label htmlFor="screenshots">Screenshots</label>
        <input id="screenshots" name="screenshots" type="file" accept=".jpg, .png, .tiff, .jpeg, .bmp, .pdf" />
        <button id="submit" type="submit">Post</button>
      </form>
    </div>
  );
}