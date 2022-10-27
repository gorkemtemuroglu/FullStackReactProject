package tr.com.havelsan.birinci.Contorller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.havelsan.birinci.entity.Car;
import tr.com.havelsan.birinci.models.CarDTO;
import tr.com.havelsan.birinci.service.CarService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CarController {

    @Autowired
    CarService carService;



    @PostMapping("/car")
    public Car createCar(@RequestBody CarDTO carDTO){
       return carService.saveCar(carDTO);
    }

    @GetMapping("/car/{id}")
    public Car createCar(@PathVariable long id){
        return carService.fetchCarList(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/car/person/{id}")
    public List<Car> getAllCars(@PathVariable long id) {
        return carService.fetchAllCarList(id);
    }


    @PutMapping("/car")
    public Car updateCar(@RequestBody CarDTO carDTO){
       return carService.updateCar(carDTO);
    }

    @DeleteMapping("/car/{id}")
    public String deleteCar(@PathVariable long id) {
        carService.deleteCarById(id);
        return "You deleted the car which id is : " +id;
    }

}
