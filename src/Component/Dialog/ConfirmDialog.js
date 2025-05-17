import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import Alert from './Alert';

const ConfirmDialog = createContext();

export function ConfirmDialogProvider({ children }) {
  const [state, setState] = useState({ isShow: false });
  const fn = useRef();

  const confirm = useCallback(
    (data) => {
      return new Promise((resolve) => {
        setState({ ...data, isShow: true });
        fn.current = (choice) => {
          resolve(choice);
          setState({ isShow: false });
        };
      });
    },
    [setState]
  );

  return (
    <ConfirmDialog.Provider value={confirm}>
      {children}
      <Alert
        {...state}
        onClose={() => fn.current(false)}
        onConfirm={() => fn.current(true)}
      />
    </ConfirmDialog.Provider>
  );
}

export default function useConfirm() {
  return useContext(ConfirmDialog);
}