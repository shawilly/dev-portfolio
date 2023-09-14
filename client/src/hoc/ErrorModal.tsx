import React, { useEffect } from "react";
import { styles } from "../styles";

interface ErrorModalProps {
  error: Error | null;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ error, onClose }) => {
  const [showModal, setShowModal] = React.useState(false);
  useEffect(() => {
    if (error) {
      setShowModal(true);
    }
  }, [error]);

  if (!showModal || !error) {
    return null;
  }

  return (
    <div
      className={`${styles.padding} w-[800px] h-[800px] fixed inset-0 flex items-center justify-center z-50`}
    >
      <div className="bg-white opacity-91 p-6 rounded-xl shadow-md">
        <h2 className="text-xl text-[#ff0000] font-semibold mb-4">Error</h2>
        <p className="mb-4 text-black bold items-centre">
          An error has occurred:{" "}
          <span className="text-[#ff0000] italic">{`${error.message}`}</span>{" "}
        </p>
        <p className="mb-4 text-black bold items-centre">
          Please try refreshing the page. If the error persists, please contact
          support at{" "}
          <a
            className="text-[#0000FF] underline"
            href="mailto:support@shawilly.dev"
          >
            support@shawilly.dev
          </a>
          .
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
