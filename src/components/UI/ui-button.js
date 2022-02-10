import './ui.css';

export default function UIButton({ children, onClick }) {
  return (
    <button
        onClick={onClick}
        className="ui-button"
    >
        { children }
    </button>
  );
}
