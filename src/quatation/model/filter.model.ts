import { QuotationStatus } from "../enums/quotation.status";


export interface QuotationQueryOption {
  userId?: string;
  agentId?: string;
  status?: QuotationStatus;
}
