import { QuotationStatus } from "../enums/quotation.status";

export interface CreateQuotationInput {
    userId: string;
    enquiryId: string;
    agentId: string;
    fileLink: string;
    notes: string;
  }
