package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.models.AdressDTO;

import java.util.List;

public interface AdressService {

    //Save operation
    Adress saveAdress(AdressDTO adressDTO);


    //Read operation
    Adress fetchAdressList(long id);

    //Adresses Main person
    List<Adress>fetchAllAdressList(long id);

    //Update operation
    Adress updateAdress(AdressDTO adressDTO);

    //Delete operation
    void deleteAdressById(long personId);
}
