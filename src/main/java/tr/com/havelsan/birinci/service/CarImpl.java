package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Car;
import tr.com.havelsan.birinci.models.CarDTO;
import tr.com.havelsan.birinci.repository.CarRepository;

import java.util.List;

@Service
public class CarImpl implements CarService {

    @Autowired
    CarRepository carRepository;


    @Override
    public Car saveCar(CarDTO carDTO) {
        Car car = new Car();
        car.setCar(carDTO.getCar());
        car.setCar_color(carDTO.getCar_color());
        car.setUserId(carDTO.getUserId());


        return carRepository.save(car);
    }

    @Override
    public Car fetchCarList(long id) {
        return carRepository.findById(id);
    }

    @Override
    public List<Car> fetchAllCarList(long id) {
        return carRepository.findByUserId(id);
    }

    @Override
    public Car updateCar(CarDTO carDTO) {
        Car car = carRepository.findById(carDTO.getId());
        car.setCar(carDTO.getCar());
        car.setCar_color(carDTO.getCar_color());

        return carRepository.save(car);
    }

    @Override
    public void deleteCarById(long personId) {
        Car car = carRepository.findById(personId);
        carRepository.delete(car);
    }
}
