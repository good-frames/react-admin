import { createContext } from 'react';

export type LayoutOptions = {
  expandSidebar?: boolean;
}

export interface LayoutAction {
  type: string;
  [key: string]: any;
}

export interface LayoutContextValue {
  options: LayoutOptions;
  toggleExpandSidebar: () => void;
}

export const defaultOptions: LayoutOptions = {
  expandSidebar: false
};

export const LayoutContext = createContext<LayoutContextValue>({
  options: defaultOptions,
  toggleExpandSidebar: () => {}
});