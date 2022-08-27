import { MigrationInterface, QueryRunner } from "typeorm";

export class quotationPrice1661624260637 implements MigrationInterface {
    name = 'quotationPrice1661624260637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quotation" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quotation" DROP COLUMN "price"`);
    }

}
