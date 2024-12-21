import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice, PaymentReceipt } from '../../entities/index';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { CreatePaymentReceiptDto } from './dto/create-payment-receipt.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
    @InjectRepository(PaymentReceipt)
    private PaymentReceiptRepository: Repository<PaymentReceipt>,
  ) {}

  async crearFactura(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = this.invoiceRepository.create(createInvoiceDto);
    return await this.invoiceRepository.save(invoice);
  }

  async registrarPago(
    invoiceId: string,
    createPaymentReceiptDto: CreatePaymentReceiptDto,
  ): Promise<Invoice> {
    const invoice = await this.invoiceRepository.findOne({
      where: { id: invoiceId },
    });
    if (!invoice) {
      throw new NotFoundException('Invoice no encontrada');
    }
    if (invoice.estado === 'pagada') {
      throw new BadRequestException('Esta factura ya ha sido pagada');
    }

    const paymentReceipt = this.PaymentReceiptRepository.create(
      createPaymentReceiptDto,
    );
    await this.PaymentReceiptRepository.save(paymentReceipt);

    invoice.paymentReceipt = paymentReceipt;
    invoice.estado = 'pagada';
    return await this.invoiceRepository.save(invoice);
  }

  async obtenerFacturasPendientes(companyId: string): Promise<Invoice[]> {
    return await this.invoiceRepository.find({
      where: { company: { id: companyId }, estado: 'pendiente' },
    });
  }

  async obtenerFacturasClienteApp(clientAppId: string): Promise<Invoice[]> {
    return await this.invoiceRepository.find({
      where: { clientApp: { id: clientAppId } },
    });
  }
}
