"use client";

import React, { useEffect } from "react";
import { CloseIcon } from "../../svg/SvgImages";

export default function CustomModal({
  isOpen,
  onClose,
  showCloseIcon = true,
  children,
  title,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-600 bg-opacity-20">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="pb-2 w-full text-center text-xl text-black">
            {title}
          </h2>
          {showCloseIcon && (
            <button onClick={onClose} className="float-right">
              <CloseIcon className="text-black w-6 h-6" />
            </button>
          )}
        </div>
        <div className="clear-both">{children}</div>
      </div>
    </div>
  );
}
