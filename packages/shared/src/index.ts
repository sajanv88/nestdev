import { IsEqualTo } from "decorators/is-equal-to";
import { EmailSenderService } from "services/email-sender.service";

export const shared = {
  decorators: {
    IsEqualTo
  },
  services: {
    EmailSenderService
  },

};

export type { IEmailSender } from "services/i-email-sender";
