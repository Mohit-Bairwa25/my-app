import React from 'react';

const MyNotebook = () => {
  return (
    <div className="container my-3">
      <h1 className="my-4">Welcome to My Notebook</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Save Your Notes on the Cloud</h2>
          <p>
            <strong>Stay Organized with Our Free Note-Taking App.</strong> Capture your thoughts and ideas effortlessly with our user-friendly note-taking app. Save your notes securely on the cloud, ensuring your data is protected with three levels of security. Never lose a note! Our app guarantees that your notes are safe and accessible, even if local storage fails. With a clean design and intuitive navigation, keeping your notes organized has never been easier.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Why Choose My Notebook?</h2>
          <ul>
            <li><strong>Free to Use:</strong> Enjoy all features at no cost. My Notebook is completely free, and you can access all functionalities without any hidden charges or subscriptions. It will be free forever!</li>
            <li><strong>Browser Compatible:</strong> My Notebook works seamlessly across all browsers, ensuring a smooth experience whether you're using Chrome, Firefox, Safari, or Edge. Mobile version glitches are being fixed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyNotebook;
