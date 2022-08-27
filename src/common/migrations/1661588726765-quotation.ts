import { MigrationInterface, QueryRunner } from "typeorm";

export class quotation1661588726765 implements MigrationInterface {
    name = 'quotation1661588726765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quotation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "enquiry_id" character varying NOT NULL, "agent_id" character varying NOT NULL, "file_link" character varying NOT NULL, "notes" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'PENDING', CONSTRAINT "PK_596c572d5858492d10d8cf5383d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "quotation"`);
    }

}
