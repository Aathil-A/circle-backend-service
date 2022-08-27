import { QuotationStatus } from '../enums/quotation.status';

export interface EditQuotationInput {
  id: string;
  status: QuotationStatus;
}
