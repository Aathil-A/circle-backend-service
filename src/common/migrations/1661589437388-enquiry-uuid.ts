import { MigrationInterface, QueryRunner } from 'typeorm';

export class enquiryUuid1661589437388 implements MigrationInterface {
  name = 'enquiryUuid1661589437388';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "enquiry" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "enquiry" ADD "user_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "enquiry" ADD CONSTRAINT "FK_817bf387a46c8846ae804c2a7cf" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "enquiry" DROP CONSTRAINT "FK_817bf387a46c8846ae804c2a7cf"`,
    );
    await queryRunner.query(`ALTER TABLE "enquiry" DROP COLUMN "user_id"`);
    await queryRunner.query(
      `ALTER TABLE "enquiry" ADD "user_id" character varying NOT NULL`,
    );
  }
}
