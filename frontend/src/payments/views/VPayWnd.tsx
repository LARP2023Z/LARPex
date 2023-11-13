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
import { CPayWnd, updatePayView } from '../controllers/CPayWnd';
import { UCPayForEvent } from '../useCases/UCPayForEvent';
import { PPayWnd } from '../presenters/PPayWnd';
import { EventProxyMock } from '../services/Events';
import { PaymentProxyMock } from '../services/Payments';
import { formSettings } from './aux/variables';
import { useEffect, useMemo, useReducer } from 'react';
import { mapPaymentMethodToSelectOption } from './aux/utils';
import { useNavigate } from 'react-router-dom';

const pPW = new PPayWnd();
const iEv = new EventProxyMock();
const iPay = new PaymentProxyMock();

const ucPFE = new UCPayForEvent(pPW, iPay, iEv);

export default function VPayWnd() {
  const { handleSubmit, control } = useForm<PaymentFormData>(formSettings);

  const emptyData: VMPayWndData = new VMPayWndData();
  const [pwData, pwUpdateView] = useReducer(updatePayView, emptyData);

  pPW.injectDataHandle(pwData, pwUpdateView);

  const availablePaymentMethods: PaymentMethod[] =
    pwData.availablePaymentMethods;

  const navigate = useNavigate();

  const { onPaymentFormSubmit, onPageLoadEvent } = useMemo(
    () => CPayWnd(ucPFE, { changeView: navigate }),
    [navigate]
  );

  useEffect(() => {
    onPageLoadEvent();
  }, [onPageLoadEvent]);

  const selectOptions = availablePaymentMethods.map(
    mapPaymentMethodToSelectOption
  );

  return (
    <Draggable>
      <Window>
        <WindowHeader>Płatność</WindowHeader>
        <WindowContent>
          <form
            onSubmit={handleSubmit((v) =>
              onPaymentFormSubmit(v)
            )}
          >
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
                  control={control}
                  render={({ field: { onChange, ...field } }) => (
                    <Select
                      {...field}
                      onChange={(option) => onChange(option.value)}
                      options={selectOptions}
                    />
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
