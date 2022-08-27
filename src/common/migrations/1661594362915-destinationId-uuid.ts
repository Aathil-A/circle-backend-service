import { MigrationInterface, QueryRunner } from 'typeorm';

export class destinationIdUuid1661594362915 implements MigrationInterface {
  name = 'destinationIdUuid1661594362915';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "enquiry" DROP COLUMN "destination_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enquiry" ADD "destination_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "enquiry" ADD CONSTRAINT "FK_50cde88ee31b33c298ce0a374ea" FOREIGN KEY ("destination_id") REFERENCES "destination"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "enquiry" DROP CONSTRAINT "FK_50cde88ee31b33c298ce0a374ea"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enquiry" DROP COLUMN "destination_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "enquiry" ADD "destination_id" character varying NOT NULL`,
    );
  }
}
