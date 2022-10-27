package tr.com.havelsan.birinci.service;


import tr.com.havelsan.birinci.entity.Hobi;
import tr.com.havelsan.birinci.entity.Tel;
import tr.com.havelsan.birinci.models.HobiDTO;
import tr.com.havelsan.birinci.models.TelDTO;

import java.util.List;

public interface TelService {

    //Save operation
    Tel saveTel(TelDTO telDTO);


    //Read operation
    Tel fetchTelList(long id);

    List<Tel> fetchPersonTelList(long id);


    //Update operation
    Tel updateTel(TelDTO telDTO);

    //Delete operation
    void deleteTelById(long personId);


}
