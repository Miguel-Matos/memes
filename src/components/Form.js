export default function Form() {
  return (
    <div className="formLayout">
      <form>
        <div className="inputs">
          <input placeholder="Top" type="text" />
          <input placeholder="Bottom" type="text" />
        </div>
        <button type="submit">Get a new meme!</button>
      </form>
    </div>

  )
}