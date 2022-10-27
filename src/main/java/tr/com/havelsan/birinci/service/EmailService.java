package tr.com.havelsan.birinci.service;

import tr.com.havelsan.birinci.entity.Email;
import tr.com.havelsan.birinci.entity.Person;
import tr.com.havelsan.birinci.models.EmailDTO;
import tr.com.havelsan.birinci.models.PersonDTO;

import java.util.List;

public interface EmailService {


    //Save operation
    Email saveEmail(EmailDTO emailDTO);


    //Read operation
    Email fetchEmailList(long id);

    //Email main person
    List<Email> fetchAllEmailList(long id);


    //Update operation
    Email updateEmail(EmailDTO emailDTO);

    //Delete operation
    void deleteEmailById(long personId);



}
