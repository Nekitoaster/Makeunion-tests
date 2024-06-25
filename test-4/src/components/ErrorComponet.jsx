import { TfiFaceSad } from "react-icons/tfi";

function ErrorComponet() {
  return (
    <div className="tool-msg-container">
      <div className="tool-msg-container__text">Произошла ошибка</div>
      <span className="tool-msg-container__emoji">
        <TfiFaceSad />
      </span>
    </div>
  );
}

export default ErrorComponet;
