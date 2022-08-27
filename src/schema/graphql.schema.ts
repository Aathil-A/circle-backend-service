
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
    No = "No",
    Preference = "Preference"
}

export enum QuotationStatus {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    PENDING = "PENDING"
}

export class CreateAgentInput {
    name: string;
    address: string;
    phone: string;
    firebaseId?: Nullable<string>;
}

export class UpdateAgentInput {
    name: string;
    address: string;
    phone: string;
    firebaseId?: Nullable<string>;
}

export class CreateDestinationInput {
    name: string;
}

export class CreateEnquiryInput {
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

export class CreateQuotationInput {
    userId?: Nullable<string>;
    enquiryId?: Nullable<string>;
    agentId?: Nullable<string>;
    fileLink?: Nullable<string>;
    notes?: Nullable<string>;
}

export class QuotationQueryOption {
    userId?: Nullable<string>;
    agentId?: Nullable<string>;
    status?: Nullable<QuotationStatus>;
}

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    firebaseId?: Nullable<string>;
}

export class Agent {
    id?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    phone?: Nullable<string>;
    firebaseId?: Nullable<string>;
    isVerified?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract getAgents(): Nullable<Nullable<Agent>[]> | Promise<Nullable<Nullable<Agent>[]>>;

    abstract getAgent(id: string): Nullable<Agent> | Promise<Nullable<Agent>>;

    abstract health(): Nullable<string> | Promise<Nullable<string>>;

    abstract getDestinations(): Nullable<Nullable<Destination>[]> | Promise<Nullable<Nullable<Destination>[]>>;

    abstract getDestination(id: string): Nullable<Destination> | Promise<Nullable<Destination>>;

    abstract getEnquiry(id: string): Nullable<Enquiry> | Promise<Nullable<Enquiry>>;

    abstract getEnquiries(): Nullable<Nullable<Enquiry>[]> | Promise<Nullable<Nullable<Enquiry>[]>>;

    abstract getPresignedUrl(): Nullable<GetPreSignedUrlOutput> | Promise<Nullable<GetPreSignedUrlOutput>>;

    abstract getQuotations(quotationQueryOption?: Nullable<QuotationQueryOption>): Nullable<Nullable<Quotation>[]> | Promise<Nullable<Nullable<Quotation>[]>>;

    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getUser(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract loginUser(input?: Nullable<LoginInput>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAgent(input?: Nullable<CreateAgentInput>): Nullable<Agent> | Promise<Nullable<Agent>>;

    abstract updateAgent(input?: Nullable<UpdateAgentInput>): Nullable<Agent> | Promise<Nullable<Agent>>;

    abstract deleteAgent(id: string): Nullable<Agent> | Promise<Nullable<Agent>>;

    abstract createDestination(input: CreateDestinationInput): Nullable<Destination> | Promise<Nullable<Destination>>;

    abstract createEnquiry(input?: Nullable<CreateEnquiryInput>): Nullable<Enquiry> | Promise<Nullable<Enquiry>>;

    abstract deleteEnquiry(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createQuotation(input: CreateQuotationInput): Nullable<Quotation> | Promise<Nullable<Quotation>>;

    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(id: string, input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Destination {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class Enquiry {
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

export class GetPreSignedUrlOutput {
    key?: Nullable<string>;
    url?: Nullable<string>;
}

export class Quotation {
    id?: Nullable<string>;
    userId?: Nullable<string>;
    enquiryId?: Nullable<string>;
    agentId?: Nullable<string>;
    fileLink?: Nullable<string>;
    notes?: Nullable<string>;
    status?: Nullable<string>;
}

export class User {
    id?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
    firebaseId?: Nullable<string>;
}

type Nullable<T> = T | null;
