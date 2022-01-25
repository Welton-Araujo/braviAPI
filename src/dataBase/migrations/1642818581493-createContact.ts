import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContact1642818403709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"contact",
                columns: [
                   { 
                    name: "id",
                    type: "uuid", 
                    isPrimary: true
                   },
                   { 
                    name: "contact",
                    type: "varchar", 
                   },
                   { 
                    name: "typeContact_id",
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
                        name: "fk_contact_typeContact",
                        columnNames: ["typeContact_id"],
                        referencedTableName: "typeContact",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contact")
    }

}
