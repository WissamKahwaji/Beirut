import React from "react";

type propsType = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<propsType> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-10 max-h-[90vh]  overflow-y-auto  rounded-lg bg-white px-10 py-6 shadow transition-all ${
          open ? "scale-90 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-2 rounded-md border border-neutral-200 bg-white px-2 py-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
