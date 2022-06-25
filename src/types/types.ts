export interface VirtualKeyboardButtonInterface {
  code: string;
  label: string;
  value?: string;
  capsLabel?: string;
  capsValue?: string;
  position: {
    row: number;
    index: number;
  };
  type: VirtualKeyboardButtonType;
}

export type VirtualKeyboardButtonType = 'default' | 'caps' | 'shift' | 'backspace';
