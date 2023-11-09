import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <div class="text-center  mb-2 text-large">Follow On Social Media</div>
          <section class="mb-2">
            <a
              href=" https://www.instagram.com/_ak_motions/"
              role="button"
              target="_blank"
              className="p-2"
            >
              <img
                src="https://img.icons8.com/fluency/50/000000/instagram-new.png"
                alt="insta"
              />
            </a>
            <a
              href=" https://youtube.com/c/AKMotionsYT"
              role="button"
              className="p-2"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/50/000000/youtube-play.png"
                alt="kjh"
              />
            </a>
            <a
              href=" https://mobile.twitter.com/AKMotions_"
              role="button"
              className="p-2"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/50/000000/twitter--v1.png"
                alt="insta"
              />
            </a>
          </section>
        </div>

        <div class="text-center p-1">Copyright 2021 © AE Templates</div>
        <div class="text-center pb-4">Developed By Amogh Kanade</div>
      </footer>
    </>
  );
};

export default Footer;
