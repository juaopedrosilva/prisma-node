import UserController from "./controllers/UserController";
import HouseController from "./controllers/HouseController";
import BookingController from "./controllers/BookingController";

async function main() {
  const userController = new UserController()
  const houseController = new HouseController()
  const bookingController = new BookingController()

  // const user = await userController.create({
  //   name: "Pedro",
  //   email: "pedro@gmail.com"
  // })

  // const house = await houseController.create({
  //   title: "Casa",
  //   description: "Casa 5 quartos"
  // })

  // const booking = await bookingController.create({
  //   startDate: new Date(),
  //   endDate: new Date("2022-10-30"),
  //   houseId: "2b90843f-69b6-4863-a35d-b6eeb900001a",
  //   userId: "ed46fd13-6f62-461d-b34e-7d7e824b1923"
  // })

  const bookings = await bookingController.findAll()
  
  console.log(bookings)
}

main()