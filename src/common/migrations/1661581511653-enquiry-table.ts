import { MigrationInterface, QueryRunner } from 'typeorm';

export class enquiryTable1661581511653 implements MigrationInterface {
  name = 'enquiryTable1661581511653';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "enquiry" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "destination_id" character varying NOT NULL, "pick_up_point" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "return_date" TIMESTAMP NOT NULL, "budget" integer NOT NULL, "adults" integer NOT NULL, "children" integer, "hotel_star" character varying, "notes" character varying, CONSTRAINT "PK_768f5a12cc02c52aca60752a310" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "enquiry"`);
  }
}
