import { RotateCcw } from "lucide-react";
import { forwardRef } from "react";

export default forwardRef(function Dialog({ title }, ref) {
  return (
    <dialog ref={ref} aria-hidden={!ref?.current?.open}>
      <h2>{title}</h2>
      <button className="styled">
        <RotateCcw size={16} />
        restart
      </button>
    </dialog>
  );
});
