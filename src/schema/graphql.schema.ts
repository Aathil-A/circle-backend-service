
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum QuotationStatus {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    PENDING = "PENDING"
}

export interface CreateQuotationInput {
    userId?: Nullable<string>;
    enquiryId?: Nullable<string>;
    agentId?: Nullable<string>;
    fileLink?: Nullable<string>;
    notes?: Nullable<string>;
}

export interface QuotationQueryOption {
    userId?: Nullable<string>;
    agentId?: Nullable<string>;
    status?: Nullable<QuotationStatus>;
}

export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IQuery {
    health(): Nullable<string> | Promise<Nullable<string>>;
    getQuotations(quotationQueryOption?: Nullable<QuotationQueryOption>): Nullable<Nullable<Quotation>[]> | Promise<Nullable<Nullable<Quotation>[]>>;
    getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Quotation {
    id?: Nullable<string>;
    userId?: Nullable<string>;
    enquiryId?: Nullable<string>;
    agentId?: Nullable<string>;
    fileLink?: Nullable<string>;
    notes?: Nullable<string>;
    status?: Nullable<string>;
}

export interface IMutation {
    createQuotation(input: CreateQuotationInput): Nullable<Quotation> | Promise<Nullable<Quotation>>;
    createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: string, input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
