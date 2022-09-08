export default function InputName({ name, onChange }) {
  return (
    <p>
      <label htmlFor="input-name">
        Name:
      </label>
      <input
        id="input-name"
        type="text"
        value={name}
        onChange={onChange}
      />
    </p>
  );
}
