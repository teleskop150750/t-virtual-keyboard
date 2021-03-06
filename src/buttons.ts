import type { VirtualKeyboardButtonInterface } from './types/types';

export const initialButtons: Record<string, VirtualKeyboardButtonInterface[]> = {
  en: [
    {
      code: 'Backquote',
      label: '`',
      value: '`',
      capsLabel: '~',
      capsValue: '~',
      position: {
        row: 1,
        index: 1,
      },
      type: 'default',
    },
    {
      code: 'Digit1',
      label: '1',
      value: '1',
      capsLabel: '!',
      capsValue: '!',
      position: {
        row: 1,
        index: 2,
      },
      type: 'default',
    },
    {
      code: 'Digit2',
      label: '2',
      value: '2',
      capsLabel: '@',
      capsValue: '@',
      position: {
        row: 1,
        index: 3,
      },
      type: 'default',
    },
    {
      code: 'Digit3',
      label: '3',
      value: '3',
      capsLabel: '#',
      capsValue: '#',
      position: {
        row: 1,
        index: 4,
      },
      type: 'default',
    },
    {
      code: 'Digit4',
      label: '4',
      value: '4',
      capsLabel: '$',
      capsValue: '$',
      position: {
        row: 1,
        index: 5,
      },
      type: 'default',
    },
    {
      code: 'Digit5',
      label: '5',
      value: '5',
      capsLabel: '%',
      capsValue: '%',
      position: {
        row: 1,
        index: 6,
      },
      type: 'default',
    },
    {
      code: 'Digit6',
      label: '6',
      value: '6',
      capsLabel: '^',
      capsValue: '^',
      position: {
        row: 1,
        index: 7,
      },
      type: 'default',
    },
    {
      code: 'Digit7',
      label: '7',
      value: '7',
      capsLabel: '&',
      capsValue: '&',
      position: {
        row: 1,
        index: 8,
      },
      type: 'default',
    },
    {
      code: 'Digit8',
      label: '8',
      value: '8',
      capsLabel: '*',
      capsValue: '*',
      position: {
        row: 1,
        index: 9,
      },
      type: 'default',
    },
    {
      code: 'Digit9',
      label: '9',
      value: '9',
      capsLabel: '(',
      capsValue: '(',
      position: {
        row: 1,
        index: 10,
      },
      type: 'default',
    },
    {
      code: 'Digit0',
      label: '0',
      value: '0',
      capsLabel: ')',
      capsValue: ')',
      position: {
        row: 1,
        index: 11,
      },
      type: 'default',
    },
    {
      code: 'Minus',
      label: '-',
      value: '-',
      capsLabel: '_',
      capsValue: '_',
      position: {
        row: 1,
        index: 12,
      },
      type: 'default',
    },
    {
      code: 'Equal',
      label: '=',
      value: '=',
      capsLabel: '+',
      capsValue: '+',
      position: {
        row: 1,
        index: 13,
      },
      type: 'default',
    },
    {
      code: 'Backspace',
      label: 'backspace',
      position: {
        row: 1,
        index: 14,
      },
      type: 'backspace',
    },
    {
      label: 'tab',
      code: 'Tab',
      value: '\t',
      position: {
        row: 2,
        index: 1,
      },
      type: 'default',
    },
    {
      code: 'KeyQ',
      label: 'q',
      value: 'q',
      capsLabel: 'Q',
      capsValue: 'Q',
      position: {
        row: 2,
        index: 2,
      },
      type: 'default',
    },
    {
      code: 'KeyW',
      label: 'w',
      value: 'w',
      capsLabel: 'W',
      capsValue: 'W',
      position: {
        row: 2,
        index: 3,
      },
      type: 'default',
    },
    {
      code: 'KeyE',
      label: 'e',
      value: 'e',
      capsLabel: 'E',
      capsValue: 'E',
      position: {
        row: 2,
        index: 4,
      },
      type: 'default',
    },
    {
      code: 'KeyR',
      label: 'r',
      value: 'r',
      capsLabel: 'R',
      capsValue: 'R',
      position: {
        row: 2,
        index: 5,
      },
      type: 'default',
    },
    {
      code: 'KeyT',
      label: 't',
      value: 't',
      capsLabel: 'T',
      capsValue: 'T',
      position: {
        row: 2,
        index: 6,
      },
      type: 'default',
    },
    {
      code: 'KeyY',
      label: 'y',
      value: 'y',
      capsLabel: 'Y',
      capsValue: 'Y',
      position: {
        row: 2,
        index: 7,
      },
      type: 'default',
    },
    {
      code: 'KeyU',
      label: 'u',
      value: 'u',
      capsLabel: 'U',
      capsValue: 'U',
      position: {
        row: 2,
        index: 8,
      },
      type: 'default',
    },
    {
      code: 'KeyI',
      label: 'i',
      value: 'i',
      capsLabel: 'I',
      capsValue: 'I',
      position: {
        row: 2,
        index: 9,
      },
      type: 'default',
    },
    {
      code: 'KeyO',
      label: 'o',
      value: 'o',
      capsLabel: 'O',
      capsValue: 'O',
      position: {
        row: 2,
        index: 10,
      },
      type: 'default',
    },
    {
      code: 'KeyP',
      label: 'p',
      value: 'p',
      capsLabel: 'P',
      capsValue: 'P',
      position: {
        row: 2,
        index: 11,
      },
      type: 'default',
    },
    {
      code: 'BracketLeft',
      label: '[',
      value: '[',
      capsLabel: '{',
      capsValue: '{',
      position: {
        row: 2,
        index: 12,
      },
      type: 'default',
    },
    {
      code: 'BracketRight',
      label: ']',
      value: ']',
      capsLabel: '}',
      capsValue: '}',
      position: {
        row: 2,
        index: 13,
      },
      type: 'default',
    },
    {
      code: 'Backslash',
      label: '\\',
      value: '\\',
      capsLabel: '|',
      capsValue: '|',
      position: {
        row: 2,
        index: 14,
      },
      type: 'default',
    },
    {
      code: 'CapsLock',
      label: 'caps',
      position: {
        row: 3,
        index: 1,
      },
      type: 'caps',
    },
    {
      code: 'KeyA',
      label: 'a',
      value: 'a',
      capsLabel: 'A',
      capsValue: 'A',
      position: {
        row: 3,
        index: 3,
      },
      type: 'default',
    },
    {
      code: 'KeyS',
      label: 's',
      value: 's',
      capsLabel: 'S',
      capsValue: 'S',
      position: {
        row: 3,
        index: 4,
      },
      type: 'default',
    },
    {
      code: 'KeyD',
      label: 'd',
      value: 'd',
      capsLabel: 'D',
      capsValue: 'D',
      position: {
        row: 3,
        index: 5,
      },
      type: 'default',
    },
    {
      code: 'KeyF',
      label: 'f',
      value: 'f',
      capsLabel: 'F',
      capsValue: 'F',
      position: {
        row: 3,
        index: 6,
      },
      type: 'default',
    },
    {
      code: 'KeyG',
      label: 'g',
      value: 'g',
      capsLabel: 'G',
      capsValue: 'G',
      position: {
        row: 3,
        index: 7,
      },
      type: 'default',
    },
    {
      code: 'KeyH',
      label: 'h',
      value: 'h',
      capsLabel: 'H',
      capsValue: 'H',
      position: {
        row: 3,
        index: 8,
      },
      type: 'default',
    },
    {
      code: 'KeyJ',
      label: 'j',
      value: 'j',
      capsLabel: 'J',
      capsValue: 'J',
      position: {
        row: 3,
        index: 9,
      },
      type: 'default',
    },
    {
      code: 'KeyK',
      label: 'k',
      value: 'k',
      capsLabel: 'K',
      capsValue: 'K',
      position: {
        row: 3,
        index: 10,
      },
      type: 'default',
    },
    {
      code: 'KeyL',
      label: 'l',
      value: 'l',
      capsLabel: 'L',
      capsValue: 'L',
      position: {
        row: 3,
        index: 11,
      },
      type: 'default',
    },
    {
      code: 'Semicolon',
      label: ';',
      value: ';',
      capsLabel: ':',
      capsValue: ':',
      position: {
        row: 3,
        index: 12,
      },
      type: 'default',
    },
    {
      code: 'Quote',
      label: "'",
      value: "'",
      capsLabel: '"',
      capsValue: '"',
      position: {
        row: 3,
        index: 14,
      },
      type: 'default',
    },
    {
      code: 'Enter',
      label: 'enter',
      value: '\n',
      position: {
        row: 3,
        index: 15,
      },
      type: 'default',
    },
    {
      code: 'ShiftLeft',
      label: 'shift',
      position: {
        row: 4,
        index: 1,
      },
      type: 'shift',
    },
    {
      code: 'KeyZ',
      label: 'z',
      value: 'z',
      capsLabel: 'Z',
      capsValue: 'Z',
      position: {
        row: 4,
        index: 2,
      },
      type: 'default',
    },
    {
      code: 'KeyX',
      label: 'x',
      value: 'x',
      capsLabel: 'X',
      capsValue: 'X',
      position: {
        row: 4,
        index: 3,
      },
      type: 'default',
    },
    {
      code: 'KeyC',
      label: 'c',
      value: 'c',
      capsLabel: 'C',
      capsValue: 'C',
      position: {
        row: 4,
        index: 4,
      },
      type: 'default',
    },
    {
      code: 'KeyV',
      label: 'v',
      value: 'v',
      capsLabel: 'V',
      capsValue: 'V',
      position: {
        row: 4,
        index: 5,
      },
      type: 'default',
    },
    {
      code: 'KeyB',
      label: 'b',
      value: 'b',
      capsLabel: 'B',
      capsValue: 'B',
      position: {
        row: 4,
        index: 6,
      },
      type: 'default',
    },
    {
      code: 'KeyN',
      label: 'n',
      value: 'n',
      capsLabel: 'N',
      capsValue: 'N',
      position: {
        row: 4,
        index: 7,
      },
      type: 'default',
    },
    {
      code: 'KeyM',
      label: 'm',
      value: 'm',
      capsLabel: 'M',
      capsValue: 'M',
      position: {
        row: 4,
        index: 8,
      },
      type: 'default',
    },
    {
      code: 'Comma',
      label: ',',
      value: ',',
      capsLabel: '<',
      capsValue: '<',
      position: {
        row: 4,
        index: 9,
      },
      type: 'default',
    },
    {
      code: 'Period',
      label: '.',
      value: '.',
      capsLabel: '>',
      capsValue: '>',
      position: {
        row: 4,
        index: 10,
      },
      type: 'default',
    },
    {
      code: 'Slash',
      label: '/',
      value: '/',
      capsLabel: '?',
      capsValue: '?',
      position: {
        row: 4,
        index: 11,
      },
      type: 'default',
    },
    {
      code: 'ShiftRight',
      label: 'shift',
      position: {
        row: 4,
        index: 12,
      },
      type: 'shift',
    },
    {
      code: '.com',
      label: '.com',
      value: '.com',
      position: {
        row: 5,
        index: 1,
      },
      type: 'default',
    },
    {
      code: '@',
      label: '@',
      value: '@',
      position: {
        row: 5,
        index: 2,
      },
      type: 'default',
    },
    {
      code: 'Space',
      label: ' ',
      value: ' ',
      position: {
        row: 5,
        index: 3,
      },
      type: 'default',
    },
  ],
};
