
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum HotelStar {
    One = "One",
    Two = "Two",
    Three = "Three",
    Four = "Four",
    Five = "Five",
    NoPreference = "NoPreference"
}

export enum QuotationStatus {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    PENDING = "PENDING"
}

export interface CreateAgentInput {
    name: string;
    address: string;
    phone: string;
    firebaseId?: Nullable<string>;
}

export interface LoginAgentInput {
    name: string;
}

export interface UpdateAgentInput {
    name?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    firebaseId?: Nullable<string>;
    destinationIds?: Nullable<Nullable<string>[]>;
}

export interface CreateDestinationInput {
    name: string;
}

export interface CreateEnquiryInput {
    userId: string;
    pickUpPoint: string;
    destinationId: string;
    startDate: Date;
    returnDate: Date;
    budget: number;
    adults: number;
    children?: Nullable<number>;
    hotelStar?: Nullable<HotelStar>;
    notes?: Nullable<string>;
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

export interface LoginInput {
    email: string;
    password: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    firebaseId?: Nullable<string>;
}

export interface Agent {
    id?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    firebaseId?: Nullable<string>;
    isVerified?: Nullable<boolean>;
    destinations?: Nullable<Nullable<Destination>[]>;
}

export interface IQuery {
    getAgents(): Nullable<Nullable<Agent>[]> | Promise<Nullable<Nullable<Agent>[]>>;
    getAgent(id: string): Nullable<Agent> | Promise<Nullable<Agent>>;
    loginAgent(input?: Nullable<LoginAgentInput>): Nullable<Agent> | Promise<Nullable<Agent>>;
    health(): Nullable<string> | Promise<Nullable<string>>;
    getDestinations(): Nullable<Nullable<Destination>[]> | Promise<Nullable<Nullable<Destination>[]>>;
    getDestination(id: string): Nullable<Destination> | Promise<Nullable<Destination>>;
    getEnquiry(id: string): Nullable<Enquiry> | Promise<Nullable<Enquiry>>;
    getCustomerEnquiries(userId: string): Nullable<Nullable<Enquiry>[]> | Promise<Nullable<Nullable<Enquiry>[]>>;
    getAgentEnquiries(agentId: string): Nullable<Nullable<Enquiry>[]> | Promise<Nullable<Nullable<Enquiry>[]>>;
    getPresignedUrl(): Nullable<GetPreSignedUrlOutput> | Promise<Nullable<GetPreSignedUrlOutput>>;
    getQuotations(quotationQueryOption?: Nullable<QuotationQueryOption>): Nullable<Nullable<Quotation>[]> | Promise<Nullable<Nullable<Quotation>[]>>;
    getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    loginUser(input?: Nullable<LoginInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createAgent(input?: Nullable<CreateAgentInput>): Nullable<Agent> | Promise<Nullable<Agent>>;
    updateAgent(id: string, input: UpdateAgentInput): Nullable<Agent> | Promise<Nullable<Agent>>;
    deleteAgent(id: string): Nullable<Agent> | Promise<Nullable<Agent>>;
    createDestination(input: CreateDestinationInput): Nullable<Destination> | Promise<Nullable<Destination>>;
    createEnquiry(input?: Nullable<CreateEnquiryInput>): Nullable<Enquiry> | Promise<Nullable<Enquiry>>;
    deleteEnquiry(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    createQuotation(input: CreateQuotationInput): Nullable<Quotation> | Promise<Nullable<Quotation>>;
    createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: string, input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Destination {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface Enquiry {
    id?: Nullable<string>;
    user?: Nullable<User>;
    pickUpPoint?: Nullable<string>;
    destination?: Nullable<Destination>;
    startDate?: Nullable<Date>;
    returnDate?: Nullable<Date>;
    budget?: Nullable<number>;
    adults?: Nullable<number>;
    children?: Nullable<number>;
    hotelStar?: Nullable<HotelStar>;
    notes?: Nullable<string>;
    createdAt?: Nullable<Date>;
}

export interface GetPreSignedUrlOutput {
    key?: Nullable<string>;
    url?: Nullable<string>;
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

export interface User {
    id?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
    firebaseId?: Nullable<string>;
}

type Nullable<T> = T | null;
