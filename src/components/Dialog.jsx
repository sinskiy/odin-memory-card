import { RotateCcw } from "lucide-react";
import { forwardRef } from "react";

export default forwardRef(function Dialog({ setKey, title }, ref) {
  return (
    <dialog ref={ref} aria-hidden={!ref?.current?.open}>
      <h2>{title}</h2>
      <form method="dialog">
        <button onClick={() => setKey((key) => key + 1)} className="styled">
          <RotateCcw size={16} />
          restart
        </button>
      </form>
    </dialog>
  );
});
