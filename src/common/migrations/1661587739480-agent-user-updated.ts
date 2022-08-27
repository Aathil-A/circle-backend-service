import { MigrationInterface, QueryRunner } from 'typeorm';

export class agentUserUpdated1661587739480 implements MigrationInterface {
  name = 'agentUserUpdated1661587739480';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "agent" ADD "phone" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "agent" ADD "firebase_id" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "agent" ADD "is_verified" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "agent" ALTER COLUMN "address" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "agent" ALTER COLUMN "address" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "agent" DROP COLUMN "is_verified"`);
    await queryRunner.query(`ALTER TABLE "agent" DROP COLUMN "firebase_id"`);
    await queryRunner.query(`ALTER TABLE "agent" DROP COLUMN "phone"`);
  }
}
