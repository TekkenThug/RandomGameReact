import './ui.css';

export default function UIInput({ value, type = 'text', placeholder, onChange }) {
    return (
        <div className="ui-input">
            <input
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                type={type}
                value={value}
            />
        </div>
    );
}
