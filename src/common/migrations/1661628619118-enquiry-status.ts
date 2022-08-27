import { MigrationInterface, QueryRunner } from "typeorm";

export class enquiryStatus1661628619118 implements MigrationInterface {
    name = 'enquiryStatus1661628619118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enquiry" ADD "status" character varying NOT NULL DEFAULT 'QuotationPending'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enquiry" DROP COLUMN "status"`);
    }

}
