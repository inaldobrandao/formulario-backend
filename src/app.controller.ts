import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Client as ClientModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { CreateClientDTO } from './dtos/createClientDTO';
import * as moment from "moment"; 
import { UpdateClientDTO } from './dtos/updateClientDTO';

@ApiTags("clients")
@Controller()
export class AppController {
  constructor(private readonly clientService: AppService) {}

  @Get('client')
  async getClients(): Promise<ClientModel[]> {
    return this.clientService.clients({});
  }

  @Get('client/:id')
  async getClientById(@Param('id') id: string): Promise<ClientModel> {
    return this.clientService.client({ id: Number(id) });
  }

  @Post('client')
  async createClient(
    @Body() createClientDto: CreateClientDTO,
  ): Promise<ClientModel> {
    const { id, createdAt, email, name, cpf, city, state  } = createClientDto;
    var date = moment.utc(createdAt).format();
    
    return this.clientService.createClient({
      createdAt: date,
      email,
      name,
      cpf,
      city,
      state
    });
  }

  @Put('client')
  async updateClient(@Body() updateClientDto: UpdateClientDTO): Promise<ClientModel> {
    
    const {id, createdAt, email, name, cpf, city, state  } = updateClientDto;
    var date = moment.utc(createdAt).format();
    
    return this.clientService.updateClient({
      where: { id: Number(id) },
      data: { 
        createdAt: date,
        email,
        name,
        cpf,
        city,
        state 
      },
    });
  }

  @Delete('client/:id')
  async deleteClient(@Param('id') id: string): Promise<ClientModel> {
    return this.clientService.deleteClient({ id: Number(id) });
  }
}
