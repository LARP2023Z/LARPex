import { PayView } from './PayView';

export const PayPresenter = () => {
  const onPayFormUpdate = () => {
    // aktualizacja formularza
    validateForm();
  };

  const validateForm = () => {
    // walidacja formularza
  };

  return <PayView onPayFormUpdate={onPayFormUpdate} />;
};
