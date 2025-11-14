import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { IoCloseSharp } from "@/icons/index";
import { Fragment, type ReactNode } from "react";
import { useAppStore } from "@/store/useAppStore";

type ModalLayoutProps = {
  children: ReactNode;
  onClose?: () => void;
};

export default function ModalLayout({ children, onClose }: ModalLayoutProps) {
  const { modal, isOpen, setIsOpen, clearModal } = useAppStore();

  const handelAfterLeave = () => {
    clearModal();
    if (onClose) onClose();
  };

  return (
    <Transition
      appear
      show={modal !== null && isOpen}
      as={Fragment}
      afterLeave={handelAfterLeave}
    >
      <Dialog as="div" className="relative z-30" onClose={setIsOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-6">
                <button
                  onClick={() => {
                    setIsOpen();
                  }}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-red-100 hover:text-red-500 transition"
                  aria-label="Cerrar modal"
                >
                  <IoCloseSharp className="w-6 h-6" />
                </button>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
