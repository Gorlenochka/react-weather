import React from "react";

export default function Author() {
    return (
      <div className="Author">
        <p>
          This project was created by{" "}
          <a
            href="https://eclectic-kringle-cd3e49.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Olena Gorlenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Gorlenochka?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </p>
      </div>
    );
}