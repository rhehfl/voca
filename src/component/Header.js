import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">
          <a>토익 영단어(고급)</a>
        </Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          단어 추가
        </Link>
        <a href="/create_day" className="link">
          Day추가
        </a>
      </div>
    </div>
  );
}
