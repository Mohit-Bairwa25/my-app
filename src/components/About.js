import React from "react";

export default function About() {

  return (
    <div className='container' >
        <h1 style={{ margin: '35px 0px', marginTop:'90px' }}>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              
            >
              Save Your Notes on Cloud
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
            <strong>Stay Organized with Our Free Note-Taking App. </strong>
              Capture your thoughts and ideas effortlessly with our user-friendly note-taking app. Save your notes securely on the cloud, ensuring your data is protected with three levels of security.
              <code> Never lose a note! </code>
              Our app guarantees that your notes are safe and accessible, even if local storage fails. With a clean design and intuitive navigation, keeping your notes organized has never been easier.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>Enjoy all features at no cost.</strong> This My-Notebook is completely free to use. You can access all functionalities without any hidden charges or subscriptions. <code>.It will be free Forever</code>,
              spend your money on important stuff.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              <strong>Works seamlessly across all browsers.</strong> This tool is designed to be compatible with all major web browsers, ensuring a smooth experience whether you're using Chrome, Firefox, Safari, or Edge.<code>.But there might be some problem in mobile version</code>,
              but all the glitches will be fix soon.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}