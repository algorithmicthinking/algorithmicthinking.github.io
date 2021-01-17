import React from "react";

const Resources = () => {
  return (
    <div class="row">
      <a class="anchor" id="resources" />
      <div class="col">
        <h2>Resources</h2>

        <p>
          Ask your questions on our class{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://piazza.com/berkeley/spring2021/cs198112"
          >
            Piazza
          </a>
        </p>

        <h3>Lecture Slides</h3>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href=".">
              Introduction
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
