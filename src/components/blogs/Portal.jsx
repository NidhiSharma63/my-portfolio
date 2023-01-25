import ReactDOM from "react-dom";

//create a modal
function LinkModal({ children }) {
  //to create a portal, use the createPortal function:
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}
export default LinkModal;
