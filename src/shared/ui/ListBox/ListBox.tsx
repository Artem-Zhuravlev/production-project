import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { DropdownDirection } from 'shared/types/ui';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}


interface ListboxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft,
};

export const ListBox = (props: ListboxProps) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label
  } = props;

  return (
    <HStack gap="4">
      {label && <span>{label + '>'}</span>}
      <HListBox
      as="div"
      value={value}
      onChange={onChange}
      className={classNames(cls.ListBox, {}, [className])}
      disabled={readonly}
    >
      <HListBox.Button
        as={Fragment}
      >
        <Button
          disabled={readonly}
        >
          {value ?? defaultValue}
        </Button>
      </HListBox.Button>
      <HListBox.Options
        className={classNames(cls.options, mapDirectionClass, [])}
      >
        {items?.map((item) => (
          <HListBox.Option
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li
                className={
                  classNames(cls.item, {
                    [cls.active]: active,
                    [cls.disabled]: item.disabled
                  }, [])}
              >
                { selected && '!!!' }
                {item.content}
              </li>
            )}
            
          </HListBox.Option>
        ))}
      </HListBox.Options>
    </HListBox>
  </HStack>
  )
}