package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Hobi;
import tr.com.havelsan.birinci.entity.Person;
import tr.com.havelsan.birinci.models.HobiDTO;
import tr.com.havelsan.birinci.models.PersonDTO;

import java.util.List;

public interface HobiService {

    //Save operation
    Hobi saveHobi(HobiDTO hobiDTO);


    //Read operation
    Hobi fetchHobiList(long id);

    //Read mean person hobi
    List<Hobi> fetchAllHobiList(long id);


    //Update operation
    Hobi updateHobi(HobiDTO hobiDTO);

    //Delete operation
    void deleteHobiById(long personId);

}
