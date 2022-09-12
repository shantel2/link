import React, { useEffect, useState } from "react";

const Shortner = () => {
  const [link, setLink] = useState();
  const [links, setLinks] = useState([]);
  const baseUrl = "http://localhost:5000";
  async function shortenLink(link) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      link: link,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const results = await fetch(baseUrl + "/api/", requestOptions);
    return results.json();
  }
  const clickHandler = async (e) => {
    e.preventDefault();
    if (!link) alert("Please Enter A Url");
    const result = await shortenLink(link);
    console.log(result);
    const { data } = result;
    const links = JSON.parse(localStorage.getItem("links"));
    links.push(data);
    setLinks(links);
    localStorage.setItem("links", JSON.stringify(links));
  };

  useEffect(() => {
    // Get Recent links in local storage
    const links = localStorage.getItem("links");
    if (!links) {
      localStorage.setItem("links", JSON.stringify([]));
      setLinks([]);
      return;
    }
    setLinks(JSON.parse(links));
  }, []);

  return (
    <div className="main-container">
      <form className="input-container" onSubmit={clickHandler}>
        <h1>
          URL <span> Shortener </span>{" "}
        </h1>
        <div className="input-area">
          <input
            style={{ fontSize: "1.2rem" }}
            type="url"
            placeholder="paste link here..."
            value={link || ""}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type="submit"> Shorten </button>
        </div>
      </form>
      <div className="results-area" style={{ marginTop: "2rem" }}>
        {links?.map((link) => (
          <>
            {" "}
            <a
              key={link.name}
              href={baseUrl + "/api/" + link.name}
              style={{ fontSize: "1.4rem", color: "darkBlue" }}
            >
              {baseUrl + "/" + link.name}
            </a>
            <br />
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default Shortner;
