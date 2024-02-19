import { ApiProperty } from "@nestjs/swagger";

export class UpdateClientDTO {
    @ApiProperty({
            example: '1',
            description: 'Código Primary Key'
    })
    id: number;

    @ApiProperty({
        example: '2024-02-17 21:47:00',
        description: 'Data do registro'
    })
    createdAt?: Date;

    @ApiProperty({
        example: 'email@email.com',
        description: 'Email do registro'
    })
    email: string;

    @ApiProperty({
        example: 'Fulano',
        description: 'Nome do registro'
    })
    name: string; 

    @ApiProperty({
        example: '00000000000',
        description: 'CPF do registro'
    })
    cpf: string; 

    @ApiProperty({
        example: 'Cidade',
        description: 'Cidade do registro'
    })
    city: string; 

    @ApiProperty({
        example: 'Estado',
        description: 'Estado do registro'
    })
    state: string
}