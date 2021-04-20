import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618946531278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'settings',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name : "username",
                        type: "varchar",
                    },
                    {
                        name : "chat",
                        type: "bollean",
                        default: true
                    },
                    {
                        name : "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name : "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Settings");
    }

}
