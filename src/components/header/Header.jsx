import "./header.css";
 
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">CHILDREN's</span>
        <span className="headerTitleLg">POPPY</span>
      </div>
      <img
        className="headerImg"
        src="/images/image-1.jpg"
        alt=""
      />
    </div>
  );
}
