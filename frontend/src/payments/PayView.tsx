import { Button } from 'react95';
type PayPresenterProps = {
  onPayFormUpdate: () => void;
};

export const PayView = ({ onPayFormUpdate }: PayPresenterProps) => {
  return (
    <Button fullWidth onClick={onPayFormUpdate}>
      Płatność
    </Button>
  );
};
