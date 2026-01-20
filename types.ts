
export enum VehicleType {
  MOTORCYCLE = '오토바이',
  DAMAS = '다마스',
  LABO = '라보',
  ONE_TON = '1톤 용달',
  TWO_HALF_TON = '2.5톤',
  FIVE_TON = '5톤',
  LARGE = '11톤 이상'
}

export enum PaymentMethod {
  CARD = '카드결제',
  TRANSFER = '계좌이체',
  INVOICE = '세금계산서'
}

export interface FareEstimate {
  estimatedPrice: number;
  distanceKm: number;
  durationMinutes: number;
  vehicleRecommendation: string;
  reasoning: string;
}

export interface BookingData {
  senderName: string;
  senderPhone: string;
  pickupAddress: string;
  recipientName: string;
  recipientPhone: string;
  dropoffAddress: string;
  vehicle: VehicleType;
  cargoDescription: string;
  paymentMethod: PaymentMethod;
  cardNumber?: string;
  expiryDate?: string;
  depositorName?: string;
  invoiceFile?: File | null;
}

export interface Testimonial {
  id: string;
  company: string;
  content: string;
  author: string;
  role: string;
  initials: string;
}
