import { MigrationInterface, QueryRunner } from "typeorm";

export class agentDestination1661605346129 implements MigrationInterface {
    name = 'agentDestination1661605346129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agent_destination" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "agent_id" uuid NOT NULL, "destination_id" uuid NOT NULL, CONSTRAINT "PK_cf678b44dcb7d3d0e38ab85e670" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "agent_destination" ADD CONSTRAINT "FK_18d6b489e86a3d9bec7b16fefa7" FOREIGN KEY ("agent_id") REFERENCES "agent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agent_destination" ADD CONSTRAINT "FK_9edb9a4173175f7a95dffbc17ba" FOREIGN KEY ("destination_id") REFERENCES "destination"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agent_destination" DROP CONSTRAINT "FK_9edb9a4173175f7a95dffbc17ba"`);
        await queryRunner.query(`ALTER TABLE "agent_destination" DROP CONSTRAINT "FK_18d6b489e86a3d9bec7b16fefa7"`);
        await queryRunner.query(`DROP TABLE "agent_destination"`);
    }

}
