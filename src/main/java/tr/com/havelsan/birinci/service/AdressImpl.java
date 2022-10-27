package tr.com.havelsan.birinci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.models.AdressDTO;
import tr.com.havelsan.birinci.repository.AdressRepository;

import java.util.List;

@Service
public class AdressImpl implements AdressService {

    @Autowired
    AdressRepository adressRepository;



    @Override
    public Adress saveAdress(AdressDTO adressDTO) {
        Adress adress = new Adress();
        adress.setAdress(adressDTO.getAdress());
        adress.setAdress_type(adressDTO.getAdress_type());
        adress.setCity(adressDTO.getCity());
        adress.setUserId(adressDTO.getUserId());

        return  adressRepository.save(adress);
    }

    @Override
    public Adress fetchAdressList(long id) {
        Adress adress = adressRepository.findById(id);
        return adress;
    }

    @Override
    public List<Adress> fetchAllAdressList(long id) {
        List<Adress> adressList = adressRepository.findByUserId(id);
        return adressList;
    }

    @Override
    public Adress updateAdress(AdressDTO adressDTO) {
        Adress adress = adressRepository.findById(adressDTO.getId());
        adress.setAdress_type(adressDTO.getAdress_type());
        adress.setAdress(adressDTO.getAdress());
        adress.setCity(adressDTO.getCity());



        return adressRepository.save(adress);
    }

    @Override
    public void deleteAdressById(long personId) {
        Adress adress = adressRepository.findById(personId);
        adressRepository.delete(adress);

    }
}
