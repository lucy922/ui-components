import { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ModalProps {
  title: string;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center p-4 min-h-full">
          <Dialog.Panel className="mx-auto max-w-lg rounded bg-white">
            <Dialog.Title className="p-6 border-b flex justify-between items-center border-gray-200 dark:border-gray-600">
              {props.title}
              <button className="outline-none">
                <span onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </button>
            </Dialog.Title>
            <Dialog.Description className="px-6 py-7 overflow-scroll max-h-96">
              <p>{props.children}</p>
            </Dialog.Description>
            <div className="flex items-center justify-end px-3 py-4 space-x-3 border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-blue-200 rounded-md w-20 py-2 font-semibold outline-none"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 rounded-md w-20 py-2 text-white outline-none"
              >
                Save
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
