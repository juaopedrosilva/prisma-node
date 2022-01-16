import { PrismaClient, Booking } from '@prisma/client'

class BookingController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  }

  async findAll() {
    try {
     return this.prisma.booking.findMany({
        select: {
          id: true,
          startDate: true,
          endDate: true,
          house: {
            select: {
              id: true,
              title: true
            }
          },
          user: true
        }
      })
    } catch (e) {
      return e
    }
  }
  
  async create(data: Omit<Booking, 'id'>) {
    try {
      return this.prisma.booking.create({ 
        data: {
          ...data
        } 
      })
    } catch (e) {
      return e
    }
  } 
}

export default BookingController