import { MigrationInterface, QueryRunner } from "typeorm";

export class notesNullable1661616620595 implements MigrationInterface {
    name = 'notesNullable1661616620595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quotation" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "quotation" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" DROP COLUMN "enquiry_id"`);
        await queryRunner.query(`ALTER TABLE "quotation" ADD "enquiry_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" DROP COLUMN "agent_id"`);
        await queryRunner.query(`ALTER TABLE "quotation" ADD "agent_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" ALTER COLUMN "file_link" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" ALTER COLUMN "notes" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quotation" ALTER COLUMN "notes" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" ALTER COLUMN "file_link" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" DROP COLUMN "agent_id"`);
        await queryRunner.query(`ALTER TABLE "quotation" ADD "agent_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" DROP COLUMN "enquiry_id"`);
        await queryRunner.query(`ALTER TABLE "quotation" ADD "enquiry_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "quotation" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "quotation" ADD "user_id" character varying NOT NULL`);
    }

}
