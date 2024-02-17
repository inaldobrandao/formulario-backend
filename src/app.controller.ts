import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Client as ClientModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly clientService: AppService) {}

  @Get('clients')
  async getClients(): Promise<ClientModel[]> {
    return this.clientService.clients({});
  }

  @Get('clients/:id')
  async getClientById(@Param('id') id: string): Promise<ClientModel> {
    return this.clientService.client({ id: Number(id) });
  }

  @Post('post')
  async createClient(
    @Body() postData: { id: number; createdAt?: string; email: string; name: string; cpf: string; city: string; state: string},
  ): Promise<ClientModel> {
    const { id, createdAt, email, name, cpf, city, state  } = postData;
    return this.clientService.createClient({
      createdAt,
      email,
      name,
      cpf,
      city,
      state
    });
  }
}
