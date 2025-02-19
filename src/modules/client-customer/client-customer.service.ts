import { Injectable } from '@nestjs/common';
import { CreateClientCustomerDto } from '../user/dto/create-client-customer.dto';
import { UpdateClientCustomerDto } from './dto/update-client-customer.dto';
// import { InvoiceData } from 'src/entities';
// import { ClientCustomer } from 'src/entities/clientCustomer.entity';
import { InvoiceDataRepository } from 'src/repositories/invoiceData.repository';
import { ClientCustomerRepository } from 'src/repositories/clientCustomer.repository';

@Injectable()
export class ClientCustomerService {
  constructor(
    private readonly clientCustomerRepository: ClientCustomerRepository,
    private readonly invoiceDataRepository: InvoiceDataRepository,
  ) {}

  async register(createClientCustomerDto: CreateClientCustomerDto) {
    console.log(
      '🚀 ~ ClientCustomerService ~ register ~ createClientCustomerDto:',
      createClientCustomerDto,
    );
    // let invoiceDataCreated: InvoiceData;
    // let invoiceDataSaved: InvoiceData;
    // let clientCustomerCreated: ClientCustomer;
    // const { invoiceData, ...clientAppData } = createClientCustomerDto;
    // try {
    //   invoiceDataCreated = this.invoiceDataRepository.create({
    //     ...invoiceData,
    //   });
    //   invoiceDataSaved =
    //     await this.invoiceDataRepository.save(invoiceDataCreated);
    // } catch (error) {
    //   throw new ServiceUnavailableException(
    //     `Error al registrar los datos de facturacion ${error.message}`,
    //   );
    // }
    // try {
    //   clientCustomerCreated = this.clientCustomerRepository.create({
    //     ...clientAppData,
    //     // invoiceData: invoiceDataSaved,
    //   });
    //   return this.clientCustomerRepository.save(clientCustomerCreated);
    // } catch (error) {
    //   throw new ServiceUnavailableException(
    //     `Error al registrar el cliente ${error.message}`,
    //   );
    // }
  }

  findAll() {
    return `This action returns all clientCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientCustomer`;
  }

  update(id: number, updateClientCustomerDto: UpdateClientCustomerDto) {
    console.log(
      '🚀 ~ ClientCustomerService ~ update ~ updateClientCustomerDto:',
      updateClientCustomerDto,
    );
    return `This action updates a #${id} clientCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientCustomer`;
  }
}
