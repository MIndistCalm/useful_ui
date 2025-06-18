import { ReactNode } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { clearClassName } from '../../utils';

interface HFormProps {
  children: ReactNode;
  onSubmit: (data: any) => void;
  className?: string;
}

export const HForm = ({ children, onSubmit, className }: HFormProps) => {
  return (
    <form
      className={clearClassName(['space-y-4', className])}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSubmit(data);
      }}
    >
      {children}
    </form>
  );
};

interface HInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const HInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  required,
  className,
}: HInputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className={clearClassName([
          'mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500',
          className,
        ])}
        placeholder={placeholder}
      />
    </div>
  );
};

interface HTextareaProps {
  name: string;
  label: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const HTextarea = ({
  name,
  label,
  rows = 4,
  placeholder,
  required,
  className,
}: HTextareaProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        className={clearClassName([
          'mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500',
          className,
        ])}
        placeholder={placeholder}
      />
    </div>
  );
};

interface HSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}

export const HSelect = ({
  name,
  label,
  options,
  required,
  className,
}: HSelectProps) => {
  return (
    <div>
      <Listbox name={name} as="div" className="relative">
        <Label className="block text-sm font-medium text-gray-700">
          {label}
        </Label>
        <ListboxButton
          className={clearClassName([
            'mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500',
            className,
          ])}
        >
          {options[0].label}
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option.value}
              className={({ active }) =>
                clearClassName([
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
                ])
              }
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
