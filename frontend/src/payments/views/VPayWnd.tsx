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
import { formSettings } from './utils/variables';
import { useEffect, useMemo, useReducer } from 'react';
import { mapPaymentMethodToSelectOption } from './utils/utils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useClippy } from '@react95/clippy';
import { UserProxyMock } from '../services/Users';
import { currentUserId } from 'src/api/user';

const pPW = new PPayWnd();
const iEv = new EventProxyMock();
const iPay = new PaymentProxyMock();
const iUser = new UserProxyMock();

const ucPFE = new UCPayForEvent(pPW, iPay, iEv, iUser);

export default function VPayWnd() {
  const { handleSubmit, control } = useForm<PaymentFormData>(formSettings);

  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('eventId');

  const emptyData: VMPayWndData = new VMPayWndData();
  const [pwData, pwUpdateView] = useReducer(updatePayView, emptyData);

  pPW.injectDataHandle(pwData, pwUpdateView);

  const availablePaymentMethods: PaymentMethod[] =
    pwData.availablePaymentMethods;

  const navigate = useNavigate();
  const { clippy } = useClippy();

  const { onPaymentFormSubmit, onPageLoadEvent } = useMemo(
    () => CPayWnd(ucPFE, { changeView: navigate, clippy }),
    [clippy, navigate]
  );

  useEffect(() => {
    // TEMP: just to demo data fetching for tomorrow
    iUser.getUser(currentUserId);

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
          {eventId ? (
            <form
              onSubmit={handleSubmit((v) => onPaymentFormSubmit(v, eventId))}
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
          ) : (
            <p>Błąd! Wymagane id wydarzenia</p>
          )}
        </WindowContent>
      </Window>
    </Draggable>
  );
}
