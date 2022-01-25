import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTypeConyact1642818403709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"typeContact",
                columns: [
                   { 
                    name: "id",
                    type: "uuid", 
                    isPrimary: true
                   },
                   { 
                    name: "name",
                    type: "varchar", 
                   },
                   { 
                    name: "creat_at",
                    type: "timestamp", 
                    default: "now()"

                   }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("typeContact")
    }

}
