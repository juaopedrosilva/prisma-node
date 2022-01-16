import { PrismaClient, House } from '@prisma/client'

class HouseController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient()
  } 
  
  async create(data: Omit<House, 'id'>) {
    try {
      return this.prisma.house.create({ 
        data: {
          ...data
        } 
      })
    } catch (e) {
      return e
    }
  } 
}

export default HouseController