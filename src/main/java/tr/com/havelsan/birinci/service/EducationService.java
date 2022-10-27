package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Adress;
import tr.com.havelsan.birinci.entity.Education;
import tr.com.havelsan.birinci.models.AdressDTO;
import tr.com.havelsan.birinci.models.EducationDTO;

import java.util.List;

public interface EducationService {

    //Save operation
    Education saveEducation(EducationDTO educationDTO);


    //Read operation
    Education fetchEducationList(long id);

    //mean people education info
    List<Education> fetchAllEducationList(long id);


    //Update operation
    Education updateEducation(EducationDTO educationDTO);

    //Delete operation
    void deleteEducationById(long personId);

}
