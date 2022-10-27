package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Car;
import tr.com.havelsan.birinci.models.CarDTO;

import java.util.List;

public interface CarService {


    //Save operation
    Car saveCar(CarDTO carDTO);


    //Read operation
    Car fetchCarList(long id);

    //Car Main person
    List<Car> fetchAllCarList(long id);


    //Update operation
    Car updateCar(CarDTO carDTO);

    //Delete operation
    void deleteCarById(long personId);

}
