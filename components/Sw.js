import { InitSwAuth } from '@skill-wallet/auth';

function Sw() {
  return (
    <div>
      <sw-auth partner-key='d0ccff16febe6b19769829ef09630ac7811a297b'></sw-auth>
    </div>
  );
}

InitSwAuth();
export default Sw;
