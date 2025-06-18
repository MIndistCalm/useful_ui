import { Fragment, ReactNode } from 'react';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { clearClassName } from '../../utils';

interface HModalProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
}

export const HModal = ({
  isOpen,
  onClose,
  children,
  className,
}: HModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
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
              <div
                role="dialog"
                className={clearClassName([
                  'w-full max-w-md transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all relative',
                  className,
                ])}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                {children}
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
