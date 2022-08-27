import { QuotationStatus } from '../enums/quotation.status';

export interface QuotationQueryOption {
  id?: string;
  userId?: string;
  agentId?: string;
  status?: QuotationStatus;
}
