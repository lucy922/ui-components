import { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";

export interface ModalProps {
  title: string;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0">
        <div className="flex items-center justify-center w-full h-full">
          <Dialog.Panel className="mx-auto md:max-w-lg max-w-sm rounded-2xl bg-white">
            <Dialog.Title className="px-3 py-4 font-bold border-b flex justify-between items-center border-gray-200 dark:border-gray-300">
              {props.title}
              <button className="outline-none hover:bg-blue-100 rounded-md px-2">
                <span onClick={() => setIsOpen(false)} className="text-lg">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </button>
            </Dialog.Title>
            <Dialog.Description className="px-6 py-7 overflow-auto max-h-64 md:max-h-72">
              <p>{props.children}</p>
            </Dialog.Description>
            <div className="flex items-center justify-end px-3 space-x-3 border-t border-gray-200 dark:border-gray-300">
              <Button
                type="button"
                variant="secondary"
                textColor="dark"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                textColor="white"
                onClick={() => setIsOpen(false)}
              >
                Save
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
