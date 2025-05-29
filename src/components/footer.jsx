import { FaMastodon, FaBluesky, FaInstagram, FaFacebook, FaVimeo, FaYoutube, FaRss  } from 'react-icons/fa6';

function Footer(){

  return (
     <section id="footer">
       
    <div className="left"><strong>This website is presented by the Type West Online Cohort of 2025</strong></div>
    <div className="center">Type West is a postgraduate certificate program in type design available in-person in San Francisco or online to students worldwide.</div>
    <div className="right">
      <span className="socials">
        <a target='_blank' href="https://typo.social/@letterformarchive"><FaMastodon /></a>
        <a target='_blank' href="https://bsky.app/profile/letterformarchive.org"><FaBluesky /></a>
        <a target='_blank' href="https://www.instagram.com/letterformarchive/"><FaInstagram /></a>
        <a target='_blank' href="https://www.facebook.com/letterformarchive"><FaFacebook /></a>
        <a target='_blank' href="https://vimeo.com/letterformarchive"><FaVimeo /></a>
        <a target='_blank' href="https://www.youtube.com/channel/UC7rn5scm6ysUapOzkAm65gw"><FaYoutube /></a>
        <a target='_blank' href="https://letterformarchive.org/news/feed/"><FaRss /></a>
      </span>
    </div>
    
    </section>
  );
};

export default Footer;







