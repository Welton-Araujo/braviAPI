import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1642818403709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"user",
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
                    name: "contact_id",
                    type: "uuid", 
                   },
                   { 
                    name: "creat_at",
                    type: "timestamp", 
                    default: "now()"
                   }
                ],
                foreignKeys: [
                    {
                        name: "fk_user_contact",
                        columnNames: ["contact_id"],
                        referencedTableName: "contact",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }

}
