import {
  Button,
  GroupBox,
  Select,
  TextInput,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import { useForm, Controller } from 'react-hook-form';
import { Space } from 'src/common/Space';
import Draggable from 'react-draggable';
import { PaymentMethod } from '../types/PaymentMethod';
import { PaymentFormData, VMPayWndData } from '../viewModels/VMPayWnd';
import { CPayWnd } from '../controllers/CPayWnd';
import { UCPayForEvent } from '../useCases/UCPayForEvent';
import { PPayWnd } from '../presenters/PPayWnd';
import { EventProxyMock } from '../services/Events';
import { PaymentProxyMock } from '../services/Payments';
import { useReducer } from 'react';

const pPW = new PPayWnd();
const iEv = new EventProxyMock();
const iPay = new PaymentProxyMock();

const ucPFE = new UCPayForEvent(pPW, iPay, iEv);

export default function VPayWnd() {
  const { handleSubmit, control } = useForm<PaymentFormData>({
    defaultValues: {
      amount: 123.45,
      currency: {
        name: 'PLN',
        code: 'PLN',
      },
      paymentMethod: 'Przelew',
    },
  });

  const emptyData: VMPayWndData = new VMPayWndData();

  const options: PaymentMethod[] = [
    { name: 'Przelew', icon: 'Przelew' },
    { name: 'Karta', icon: 'Karta' },
    { name: 'PayPal', icon: 'PayPal' },
  ];

  const selectOptions = options.map((paymentMethod) => ({
    value: paymentMethod.name,
    label: paymentMethod.name,
  }));

  const { onPaymentFormSubmit } = CPayWnd(ucPFE);

  return (
    <Draggable>
      <Window>
        <WindowHeader>Płatność</WindowHeader>
        <WindowContent>
          <form onSubmit={handleSubmit(onPaymentFormSubmit)}>
            <Space gap={8}>
              <GroupBox label="Kwota do zapłaty">
                <Controller
                  name="amount"
                  control={control}
                  render={({ field }) => <TextInput {...field} disabled />}
                />
              </GroupBox>

              <GroupBox label="Metoda płatności">
                <Controller
                  name="paymentMethod"
                  defaultValue={selectOptions[0].value}
                  render={({ field }) => (
                    <Select {...field} options={selectOptions} />
                  )}
                />
              </GroupBox>
              <Button fullWidth type="submit">
                Płatność
              </Button>
            </Space>
          </form>
        </WindowContent>
      </Window>
    </Draggable>
  );
}
