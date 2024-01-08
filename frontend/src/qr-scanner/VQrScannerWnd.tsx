import { useMemo, useReducer } from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable';
import { useClippy } from '@react95/clippy';
import { Space } from 'src/common/Space';
import { UCProcessQrCode } from './useCases/UCProcessQrCode';
import { PQrScanner } from './presenters/PQrScanner';
import {
  CQRScannerWnd,
  updateQRScannerView,
} from './controllers/CQRScannerWnd';
import { useNavigate } from 'react-router-dom';
import { VMQrScannerWndData } from './viewModels/VMQrScannerWnd';
import { QrReaderWrapper } from './styles';
import { Interactions } from './services/QrCode';

const pQS = new PQrScanner();
const iQc = new Interactions();
const ucPQC = new UCProcessQrCode(pQS, iQc);

export function VQrScannerWnd() {
  const emptyData: VMQrScannerWndData = new VMQrScannerWndData();

  const [qrData, qrUpdateView] = useReducer(updateQRScannerView, emptyData);
  pQS.injectDataHandle(qrData, qrUpdateView);

  const { clippy } = useClippy();
  const navigate = useNavigate();

  const { onQrCodeScanned } = useMemo(
    () =>
      CQRScannerWnd(ucPQC, {
        changeView: navigate,
        clippy,
      }),
    [navigate, clippy]
  );

  return (
    <Draggable>
      <Window style={{ height: '70vh' }}>
        <WindowHeader>QR Scanner</WindowHeader>
        <WindowContent>
          <Space gap={8}>
            {clippy && (
              <QrReaderWrapper onResult={onQrCodeScanned} constraints={{}} />
            )}

            <p>{qrData.currentCode}</p>
          </Space>
        </WindowContent>
      </Window>
    </Draggable>
  );
}
