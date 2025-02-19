import { randomInt } from 'crypto';

export const generateSecureOTP = (): string => {
  const opt = randomInt(100000, 999999);
  return opt.toString();
};
