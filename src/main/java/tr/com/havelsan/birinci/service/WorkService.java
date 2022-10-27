package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Tel;
import tr.com.havelsan.birinci.entity.Work;
import tr.com.havelsan.birinci.models.TelDTO;
import tr.com.havelsan.birinci.models.WorkDTO;

import java.util.List;

public interface WorkService {

    //Save operation
    Work saveWork(WorkDTO workDTO);


    //Read operation
    Work fetchWorkist(long id);

    //Work mean person
    List<Work> fetchAllWorkList(long id);


    //Update operation
    Work updateWork(WorkDTO workDTO);

    //Delete operation
    void deleteWorkById(long personId);

}
